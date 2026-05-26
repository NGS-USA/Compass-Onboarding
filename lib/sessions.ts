import { createClient } from './supabase'

// Generate a random unique token for each onboarding session
export function generateToken(): string {
  return crypto.randomUUID()
}

// Create a brand new onboarding session (called by IA when starting an onboarding)
export async function createSession({
  clinicName,
  pocName,
  pocEmail,
  initiatedBy,
  mfaRequired,
}: {
  clinicName: string
  pocName: string
  pocEmail: string
  initiatedBy: string
  mfaRequired: boolean
}) {
  const supabase = createClient()
  const token = generateToken()

  const { data, error } = await supabase
    .from('onboarding_sessions')
    .insert({
      token,
      clinic_name: clinicName,
      poc_name: pocName,
      poc_email: pocEmail,
      initiated_by: initiatedBy,
      mfa_required: mfaRequired,
      status: 'draft',
    })
    .select()
    .single()

  if (error) throw error
  return data
}

// Get a session by its token (used by the clinic portal to load their session)
export async function getSessionByToken(token: string) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('onboarding_sessions')
    .select('*')
    .eq('token', token)
    .single()

  if (error) throw error
  return data
}

// Get all sessions (used by IA dashboard)
export async function getAllSessions() {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('onboarding_sessions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Update session status
export async function updateSessionStatus(
  sessionId: string,
  status: 'draft' | 'in_progress' | 'submitted' | 'approved' | 'archived'
) {
  const supabase = createClient()

  const { error } = await supabase
    .from('onboarding_sessions')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', sessionId)

  if (error) throw error
}

// Save section data for a session
export async function saveSectionData(
  sessionId: string,
  sectionNumber: number,
  data: Record<string, unknown>,
  completed: boolean
) {
  const supabase = createClient()

  const { error } = await supabase
    .from('section_data')
    .upsert({
      session_id: sessionId,
      section_number: sectionNumber,
      data,
      completed,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'session_id,section_number' })

  if (error) throw error
}

// Load all section data for a session
export async function getSessionSections(sessionId: string) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('section_data')
    .select('*')
    .eq('session_id', sessionId)
    .order('section_number', { ascending: true })

  if (error) throw error
  return data
}

// Log an audit event
export async function logAuditEvent(
  sessionId: string,
  event: string,
  performedBy: string,
  note?: string
) {
  const supabase = createClient()

  const { error } = await supabase
    .from('audit_log')
    .insert({
      session_id: sessionId,
      event,
      performed_by: performedBy,
      note,
    })

  if (error) throw error
}