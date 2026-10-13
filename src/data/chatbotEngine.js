import { HOSPITAL_INFO, TREATMENTS_DATA } from './dentalData';

/**
 * Verified AI Knowledge base and Response Engine for Firoz Dental Hospital.
 *
 * Strictly follows system rules:
 * - Never guess or invent fake doctors, qualifications, prices, clinic timings, or reviews.
 * - If unknown, politely state: "I'm sorry, I don't have verified information about that right now. Please contact Firoz Dental Hospital for assistance."
 * - Recommends consulting a qualified dentist for personal concerns; does not diagnose or prescribe.
 */
export function getChatbotResponse(userMessage) {
  const query = userMessage.trim().toLowerCase();

  if (!query) {
    return "Hello! How can I assist you today with Firoz Dental Hospital's treatments, appointments, or clinic details?";
  }

  // Greetings
  if (query.match(/^(hi|hello|hey|namaste|good morning|good evening|good afternoon)/)) {
    return `Hello! Welcome to **Firoz Dental Hospital**, Tirupati. I am your friendly AI Assistant. I can help you with information about **Dr. P. Firoz Babu**, our treatments (such as Braces, Aligners, Dental Implants, Root Canals), hospital location, timings, or scheduling an appointment. How can I assist you today?`;
  }

  // Doctor inquiry
  if (query.includes('doctor') || query.includes('firoz') || query.includes('dentist') || query.includes('who is') || query.includes('qualification') || query.includes('experience')) {
    return `**Chief Dental Surgeon:** **${HOSPITAL_INFO.doctor.name}**\n\n• **Qualifications:** ${HOSPITAL_INFO.doctor.qualifications}\n• **Specializations:** Orthodontist and Implantologist\n• **Experience:** ${HOSPITAL_INFO.doctor.experience}\n• **Key Expertise:** Specializes in Braces, Invisible Aligners, Lingual Orthodontics, Dental Implants, Full-Mouth Implants, and Zygomatic Implants.\n\nWould you like to book an appointment with Dr. P. Firoz Babu?`;
  }

  // Location / Address inquiry
  if (query.includes('location') || query.includes('address') || query.includes('where') || query.includes('reach') || query.includes('landmark') || query.includes('map')) {
    return `**Firoz Dental Hospital Location:**\n\n📍 **Address:** ${HOSPITAL_INFO.location}\n\n• **Landmark:** Located on the 1st Floor, opposite Khazana Jewellery at Municipal Office Junction, Tirupati.\n• **Contact Phone:** ${HOSPITAL_INFO.phone}\n\nYou can also find interactive driving directions on our Contact page.`;
  }

  // Phone / Contact inquiry
  if (query.includes('phone') || query.includes('contact') || query.includes('number') || query.includes('call') || query.includes('email')) {
    return `**Hospital Contact Details:**\n\n📞 **Phone:** ${HOSPITAL_INFO.phone}\n✉️ **Email:** ${HOSPITAL_INFO.email}\n📍 **Address:** ${HOSPITAL_INFO.shortAddress}\n\nYou can call our front desk directly at +91 97045 82322 to confirm your visit or use the appointment form on this website.`;
  }

  // Timings inquiry
  if (query.includes('timing') || query.includes('time') || query.includes('open') || query.includes('hours') || query.includes('sunday')) {
    return `**Clinic Working Timings:**\n\n• **Monday to Saturday:** 10:00 AM – 8:30 PM\n• **Sunday:** 10:00 AM – 1:30 PM\n\n*Note:* We recommend booking an appointment beforehand so you don't have to wait during peak hours.`;
  }

  // Appointment inquiry
  if (query.includes('appointment') || query.includes('book') || query.includes('slot') || query.includes('consultation')) {
    return `You can easily book an appointment with **Dr. P. Firoz Babu, MDS**:\n\n1. Use our **Book Appointment** form on this website (available in the menu or on the Contact page).\n2. Call our reception directly at **${HOSPITAL_INFO.phone}**.\n\nPlease note: AI cannot diagnose medical conditions or issue prescriptions. We always recommend an in-person clinical checkup.`;
  }

  // Cost / Pricing inquiry - Strictly handled without hallucinating prices
  if (query.includes('cost') || query.includes('price') || query.includes('fee') || query.includes('charges') || query.includes('how much') || query.includes('rate')) {
    return `Treatment costs vary depending on individual clinical conditions, severity, and the specific materials chosen (such as ceramic vs metal braces, or specific implant brands).\n\nTo ensure complete transparency and accuracy, **Dr. P. Firoz Babu** provides an exact estimate after an in-person dental examination and digital evaluation. Please call **${HOSPITAL_INFO.phone}** or visit our hospital for a consultation.`;
  }

  // Braces / Aligners / Orthodontics
  if (query.includes('brace') || query.includes('aligner') || query.includes('orthodont') || query.includes('invisalign') || query.includes('crooked') || query.includes('teeth align') || query.includes('lingual')) {
    return `**Orthodontic & Teeth Alignment at Firoz Dental Hospital:**\n\nLed directly by **Dr. P. Firoz Babu, MDS (Orthodontist)** with 14+ years of expertise:\n\n• **Metal & Ceramic Braces:** Proven, effective solutions for all types of tooth crowding and bite issues.\n• **Invisible Aligners:** Custom 3D clear trays that straighten teeth discreetly without visible wires.\n• **Lingual Orthodontics:** Braces affixed behind the teeth, completely hidden from sight.\n\nWould you like to schedule an orthodontic consultation?`;
  }

  // Implants / Zygomatic / Full mouth
  if (query.includes('implant') || query.includes('zygomatic') || query.includes('missing tooth') || query.includes('missing teeth') || query.includes('all on 4') || query.includes('full mouth')) {
    return `**Dental Implant Solutions:**\n\nDr. P. Firoz Babu is a certified **Implantologist** offering advanced tooth replacement solutions:\n\n• **Single & Multiple Dental Implants:** Permanent titanium roots topped with realistic crowns.\n• **Full-Mouth Implants (All-on-4 / All-on-6):** Fixed permanent teeth for complete arch replacement.\n• **Zygomatic Implants:** Specialized implants anchored into the cheekbone for patients with severe upper jaw bone loss, avoiding complex bone grafts.\n\nWould you like guidance on implant consultation?`;
  }

  // Root canal / Toothache / Pain
  if (query.includes('root canal') || query.includes('rct') || query.includes('pain') || query.includes('toothache') || query.includes('decay') || query.includes('cavity')) {
    return `**Root Canal Treatment (RCT) & Tooth Pain Relief:**\n\nWe provide painless rotary root canal therapy to eliminate deep infection, alleviate throbbing pain, and save your natural tooth from extraction.\n\n⚠️ *Clinical Notice:* If you are experiencing severe swelling or intense pain, please do not delay. We strongly recommend seeing Dr. P. Firoz Babu for a prompt in-person clinical examination. You can call us at **${HOSPITAL_INFO.phone}** for immediate assistance.`;
  }

  // Whitening / Cosmetic
  if (query.includes('whiten') || query.includes('bleach') || query.includes('yellow') || query.includes('cosmetic') || query.includes('smile makeover') || query.includes('stain')) {
    return `**Tooth Whitening & Cosmetic Dentistry:**\n\nWe offer professional chairside teeth whitening and smile makeovers. Our safe dental-grade whitening cleans deep tea, coffee, or age stains by several shades while protecting your tooth enamel. We also offer composite veneers and gap closure.`;
  }

  // Children / Kids / Pediatric
  if (query.includes('child') || query.includes('kid') || query.includes('baby') || query.includes('pediatric')) {
    return `**Children's Dentistry:**\n\nWe offer gentle and friendly dental care for children of all ages, including:\n• Fluoride application & dental sealants for cavity prevention\n• Gentle milk tooth fillings\n• Space maintainers\n• Habit breaking appliances for thumb-sucking or tongue-thrusting.\nOur team ensures a warm, fear-free experience for young patients!`;
  }

  // Jaw fracture / Trauma
  if (query.includes('fracture') || query.includes('jaw') || query.includes('trauma') || query.includes('accident') || query.includes('bone')) {
    return `**Jaw Bone Fracture Treatment:**\n\nFiroz Dental Hospital provides specialized management and fixation of maxillofacial trauma and jaw bone fractures to restore proper bite alignment, chewing function, and facial symmetry. For acute emergencies, please contact the hospital immediately at **${HOSPITAL_INFO.phone}**.`;
  }

  // Crowns / Bridges
  if (query.includes('crown') || query.includes('bridge') || query.includes('cap') || query.includes('zirconia')) {
    return `**Dental Crowns & Bridges:**\n\nWe offer high-strength Zirconia and porcelain-fused caps custom-fabricated to fit your natural bite and restore damaged or post-root-canal teeth with natural aesthetics and long-lasting durability.`;
  }

  // Review / Testimonial inquiry
  if (query.includes('review') || query.includes('testimonial') || query.includes('feedback') || query.includes('rating')) {
    return `Firoz Dental Hospital takes pride in genuine patient satisfaction. We showcase only verified real reviews from patients treated by Dr. P. Firoz Babu for implants, braces, aligners, and root canals. You can browse them on our **Testimonials** page.`;
  }

  // Medical diagnosis or prescription query prevention
  if (query.includes('medicine') || query.includes('tablet') || query.includes('antibiotic') || query.includes('prescribe') || query.includes('what should i take')) {
    return `As an AI assistant, I cannot prescribe medications, diagnose dental conditions, or give medical prescriptions. Please consult Dr. P. Firoz Babu at Firoz Dental Hospital for an accurate clinical assessment and appropriate medical prescription. You can call us at **${HOSPITAL_INFO.phone}** for appointment assistance.`;
  }

  // System prompt security / instructions leak check
  if (query.includes('system prompt') || query.includes('internal instructions') || query.includes('confidential') || query.includes('prompt')) {
    return `I am here to assist you with verified information regarding Firoz Dental Hospital, our doctors, treatments, and appointments. How may I help you today?`;
  }

  // Fallback compliance with prompt rule:
  // "If you do not know an answer, honestly say: 'I'm sorry, I don't have verified information about that right now. Please contact Firoz Dental Hospital for assistance.'"
  return "I'm sorry, I don't have verified information about that right now. Please contact Firoz Dental Hospital for assistance at " + HOSPITAL_INFO.phone + " or visit our clinic at Municipal Office Junction, 1st Floor, opposite Khazana Jewellery, Tirupati.";
}
