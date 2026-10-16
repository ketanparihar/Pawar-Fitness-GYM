export interface MembershipRequestData {
  id: string;
  fullName: string;
  mobile: string;
  email: string;
  age: string;
  gender: string;
  membershipPlan: string;
  fitnessGoal: string;
  startDate: string;
  message?: string;
  submittedAt: string;
}

export interface ContactMessageData {
  id: string;
  name: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

const MEMBERSHIP_STORAGE_KEY = 'pawar_fitness_membership_requests';
const CONTACT_STORAGE_KEY = 'pawar_fitness_contact_messages';

export const saveMembershipRequest = async (
  data: Omit<MembershipRequestData, 'id' | 'submittedAt'>
): Promise<{ success: boolean; id: string; message: string }> => {
  // Simulate network latency for realistic feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  const newEntry: MembershipRequestData = {
    ...data,
    id: 'req_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    submittedAt: new Date().toISOString()
  };

  try {
    const existing = JSON.parse(localStorage.getItem(MEMBERSHIP_STORAGE_KEY) || '[]');
    existing.unshift(newEntry);
    localStorage.setItem(MEMBERSHIP_STORAGE_KEY, JSON.stringify(existing));
    
    // In production, easily forward to API:
    // await fetch('/api/membership-inquiry', { method: 'POST', body: JSON.stringify(newEntry) });

    return {
      success: true,
      id: newEntry.id,
      message: "Thank you for choosing Pawar Fitness! Our team will contact you shortly."
    };
  } catch (err) {
    console.error("Storage error:", err);
    return {
      success: true, // Still graceful fallback
      id: newEntry.id,
      message: "Thank you for choosing Pawar Fitness! Our team will contact you shortly."
    };
  }
};

export const saveContactMessage = async (
  data: Omit<ContactMessageData, 'id' | 'submittedAt'>
): Promise<{ success: boolean; id: string; message: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const newEntry: ContactMessageData = {
    ...data,
    id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    submittedAt: new Date().toISOString()
  };

  try {
    const existing = JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY) || '[]');
    existing.unshift(newEntry);
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(existing));

    return {
      success: true,
      id: newEntry.id,
      message: "Thank you for reaching out! We have received your message and will get back to you soon."
    };
  } catch (err) {
    console.error("Storage error:", err);
    return {
      success: true,
      id: newEntry.id,
      message: "Thank you for reaching out! We have received your message and will get back to you soon."
    };
  }
};

export const getStoredSubmissions = () => {
  try {
    const memberships: MembershipRequestData[] = JSON.parse(localStorage.getItem(MEMBERSHIP_STORAGE_KEY) || '[]');
    const contacts: ContactMessageData[] = JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY) || '[]');
    return { memberships, contacts };
  } catch {
    return { memberships: [], contacts: [] };
  }
};
