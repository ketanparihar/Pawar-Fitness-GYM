export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  periodText: string;
  durationMonths: number;
  badge?: string;
  isPopular?: boolean;
  savingsNote?: string;
  features: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  tag: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  description: string;
  image: string;
  isPlaceholder: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Gym' | 'Equipment' | 'Training' | 'Fitness' | 'Environment';
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  role: string;
  avatarText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const gymConfig = {
  business: {
    name: "PAWAR FITNESS",
    tagline: "Transform Your Body. Transform Your Life.",
    locationText: "Badora, Betul, Madhya Pradesh – 460001",
    fullAddress: "Badora, Betul, Madhya Pradesh – 460001, India",
    city: "Betul",
    area: "Badora",
    state: "Madhya Pradesh",
    pincode: "460001",
    country: "India",
    phone: "7415493336",
    phoneDisplay: "+91 7415493336",
    email: "rs8140093@gmail.com",
    
    // Dynamic Call & WhatsApp links
    get telLink() {
      return `tel:${this.phone}`;
    },
    get whatsappLink() {
      const msg = encodeURIComponent(`Hello Pawar Fitness! I would like to inquire about membership and training at your Badora gym.`);
      return `https://wa.me/91${this.phone}?text=${msg}`;
    },
    
    // Google Maps Search & Directions links (Does not fabricate GPS coordinates)
    get googleMapsSearchUrl() {
      const query = encodeURIComponent("Pawar Fitness Badora Betul Madhya Pradesh 460001");
      return `https://www.google.com/maps/search/?api=1&query=${query}`;
    },
    get googleMapsDirectionsUrl() {
      const dest = encodeURIComponent("Badora, Betul, Madhya Pradesh 460001");
      return `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
    },
    
    // Standard gym operating hours (placeholder, editable)
    operatingHours: {
      weekdays: "5:30 AM – 10:00 PM",
      saturday: "6:00 AM – 9:00 PM",
      sunday: "7:00 AM – 1:00 PM"
    }
  },

  quickStats: [
    {
      value: "₹700",
      numeric: 700,
      prefix: "₹",
      suffix: "",
      label: "Starting Monthly Fee",
      subtext: "Most affordable gym in Badora"
    },
    {
      value: "₹6,000",
      numeric: 6000,
      prefix: "₹",
      suffix: "",
      label: "Annual Membership",
      subtext: "Best long-term fitness value"
    },
    {
      value: "100%",
      numeric: 100,
      prefix: "",
      suffix: "%",
      label: "Commitment Focused",
      subtext: "Your goals are our priority"
    },
    {
      value: "Badora",
      numeric: 0,
      isText: true,
      label: "Betul, Madhya Pradesh",
      subtext: "Prime central fitness hub"
    }
  ],

  about: {
    headline: "MORE THAN A GYM. IT'S YOUR FITNESS JOURNEY.",
    mission: "Pawar Fitness is a premier fitness destination in Badora, Betul, Madhya Pradesh, designed for people who want to become stronger, healthier, and more confident. Whether you are starting your fitness journey or looking to take your training to the next level, Pawar Fitness provides a motivating environment to help you stay consistent.",
    whyChoose: [
      {
        title: "Affordable Membership",
        description: "Unmatched pricing starting from ₹700/month with zero hidden charges and flexible terms."
      },
      {
        title: "Modern Fitness Environment",
        description: "Spacious training floors engineered for heavy lifting, conditioning, and functional movement."
      },
      {
        title: "Supportive Training Atmosphere",
        description: "A community that celebrates your personal records and keeps you motivated every single workout."
      },
      {
        title: "Convenient Location",
        description: "Centrally positioned in Badora, Betul with easy accessibility and hassle-free parking."
      },
      {
        title: "Fitness for Everyone",
        description: "Tailored for beginners, working professionals, athletes, and fitness enthusiasts alike."
      }
    ]
  },

  membershipPlans: [
    {
      id: "monthly",
      name: "MONTHLY",
      price: 700,
      periodText: "month",
      durationMonths: 1,
      savingsNote: "Standard recurring access",
      features: [
        "Full gym floor & cardio access",
        "Free weights & strength machines",
        "Locker & changing room access",
        "General fitness guidance",
        "Water & hygiene stations"
      ]
    },
    {
      id: "quarterly",
      name: "QUARTERLY",
      price: 1800,
      periodText: "3 months",
      durationMonths: 3,
      badge: "Save More",
      savingsNote: "₹600/month effective rate",
      features: [
        "Full gym floor & cardio access",
        "Free weights & strength machines",
        "Custom beginner workout blueprint",
        "Locker & changing area access",
        "Progress check every 30 days"
      ]
    },
    {
      id: "half-yearly",
      name: "HALF-YEARLY",
      price: 3500,
      periodText: "6 months",
      durationMonths: 6,
      savingsNote: "₹583/month effective rate",
      features: [
        "Full gym floor & cardio access",
        "Priority equipment assistance",
        "Dedicated posture & form reviews",
        "Locker & shower facilities",
        "Workout routine adjustments"
      ]
    },
    {
      id: "annual",
      name: "ANNUAL",
      price: 6000,
      periodText: "year",
      durationMonths: 12,
      badge: "Best Value",
      isPopular: true,
      savingsNote: "Only ₹500/month (Save ₹2,400/yr)",
      features: [
        "Unrestricted 365-day full gym access",
        "Maximum cost savings (₹500/mo)",
        "Free member orientation & assessment",
        "Guest workout passes (2/year)",
        "Free locker allocation",
        "Nutritional & workout guideline toolkit"
      ]
    }
  ] as MembershipPlan[],

  facilities: [
    {
      id: "strength-training",
      title: "Strength Training",
      description: "Heavy-duty power cages, Olympic barbells, plate-loaded machines, and cable stations.",
      icon: "Dumbbell",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
      tag: "Strength"
    },
    {
      id: "cardio-equipment",
      title: "Cardio Equipment",
      description: "High-performance motorized treadmills, spin bikes, and cross-trainers for cardiovascular endurance.",
      icon: "Activity",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop",
      tag: "Cardio"
    },
    {
      id: "free-weights",
      title: "Free Weights",
      description: "Extensive range of rubber hex dumbbells (2.5kg to 40kg), kettlebells, and adjustable benches.",
      icon: "Flame",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
      tag: "Weights"
    },
    {
      id: "weight-training",
      title: "Weight Training",
      description: "Biomechanically engineered isolation machines targeting chest, back, shoulders, arms, and legs.",
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
      tag: "Machines"
    },
    {
      id: "functional-training",
      title: "Functional Training",
      description: "Battle ropes, plyo boxes, resistance bands, and medicine balls for explosive athletic conditioning.",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
      tag: "Functional"
    },
    {
      id: "workout-area",
      title: "Workout Area",
      description: "Shock-absorbing rubber flooring, high ceilings, wide mirror arrays, and optimal ventilation.",
      icon: "Maximize",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      tag: "Gym Floor"
    },
    {
      id: "changing-area",
      title: "Changing Area",
      description: "Clean, hygienic changing zones with secure locker compartments to keep your belongings safe.",
      icon: "Lock",
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop",
      tag: "Amenities"
    },
    {
      id: "clean-environment",
      title: "Clean & Comfortable Environment",
      description: "Rigorous daily sanitization protocols, cool airflow, motivating energetic lighting, and high-energy music.",
      icon: "Sparkles",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
      tag: "Hygiene"
    }
  ] as Facility[],

  trainers: [
    {
      id: "trainer-1",
      name: "Lead Fitness Coach",
      specialization: "Strength & Conditioning",
      experience: "Sample Profile",
      description: "Specialized in powerlifting, hypertrophy training, and progressive overload mechanics.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
      isPlaceholder: true
    },
    {
      id: "trainer-2",
      name: "Transformation Specialist",
      specialization: "Weight Loss & Functional Fitness",
      experience: "Sample Profile",
      description: "Expert in body recomposition, high-intensity interval training, and mobility workouts.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      isPlaceholder: true
    },
    {
      id: "trainer-3",
      name: "Muscle Building Coach",
      specialization: "Hypertrophy & Form Correction",
      experience: "Sample Profile",
      description: "Dedicated to helping beginners build safe lifting habits and consistent progressive routines.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
      isPlaceholder: true
    }
  ] as Trainer[],

  gallery: [
    {
      id: "gal-1",
      title: "Main Strength & Barbell Station",
      category: "Gym",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
      alt: "Pawar Fitness Gym Floor"
    },
    {
      id: "gal-2",
      title: "Free Weight Dumbbell Rack",
      category: "Equipment",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
      alt: "Dumbbell Set and Weight Rack"
    },
    {
      id: "gal-3",
      title: "Intense Deadlift & Powerlifting Setup",
      category: "Training",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
      alt: "Athletic Deadlift Station"
    },
    {
      id: "gal-4",
      title: "Chest & Upper Body Bench Area",
      category: "Equipment",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
      alt: "Bench Press and Incline Stations"
    },
    {
      id: "gal-5",
      title: "Cardio Treadmill Section",
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop",
      alt: "Cardio Running and Endurance Section"
    },
    {
      id: "gal-6",
      title: "High-Energy Training Atmosphere",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop",
      alt: "Clean and Motivating Workout Space"
    },
    {
      id: "gal-7",
      title: "Cable Crossover & Functional Rigs",
      category: "Equipment",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
      alt: "Cable and Pulley Fitness Equipment"
    },
    {
      id: "gal-8",
      title: "Dedicated Stretching & Warm-up Zone",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      alt: "Warmup and Mobility Training Zone"
    }
  ] as GalleryItem[],

  testimonials: [
    {
      id: "test-1",
      name: "Rohit Verma",
      role: "Member (8 Months)",
      rating: 5,
      avatarText: "RV",
      review: "Pawar Fitness has been a game-changer for me in Badora. The atmosphere is super energetic, and having access to clean equipment for just ₹700 a month is unbelievable value in Betul."
    },
    {
      id: "test-2",
      name: "Pooja Sharma",
      role: "Member (1 Year)",
      rating: 5,
      avatarText: "PS",
      review: "I joined with the annual membership of ₹6,000 and it's the best investment I've made. Very supportive vibe, good equipment, and comfortable space for workouts."
    },
    {
      id: "test-3",
      name: "Ankit Malviya",
      role: "Member (6 Months)",
      rating: 5,
      avatarText: "AM",
      review: "Great gym in Betul! Plenty of free weights, heavy dumbbells, and solid benches. Perfect place if you are serious about strength training and consistency."
    },
    {
      id: "test-4",
      name: "Sandeep Yadav",
      role: "Member (4 Months)",
      rating: 5,
      avatarText: "SY",
      review: "Very convenient location in Badora. The staff is polite, the gym stays clean, and you get all the essential workout equipment without paying crazy prices."
    }
  ] as Testimonial[],

  faqs: [
    {
      id: "faq-1",
      question: "What are the membership fees?",
      answer: "Pawar Fitness offers straightforward and transparent pricing: Monthly membership is ₹700, Quarterly (3 months) is ₹1,800, Half-Yearly (6 months) is ₹3,500, and our best value Annual membership is ₹6,000 (which comes out to just ₹500/month)."
    },
    {
      id: "faq-2",
      question: "Where is Pawar Fitness located?",
      answer: "We are conveniently located in Badora, Betul, Madhya Pradesh – 460001, India. You can easily click our 'Get Directions' or 'Find Pawar Fitness' buttons to open Google Maps."
    },
    {
      id: "faq-3",
      question: "Do you offer monthly memberships?",
      answer: "Yes! We offer a flexible monthly membership at just ₹700 per month, giving you full access to all workout floors and equipment with no long-term commitment required."
    },
    {
      id: "faq-4",
      question: "Can I join for only three months?",
      answer: "Yes, our Quarterly plan is designed specifically for 3 months at ₹1,800. It saves you money compared to renewing monthly and gives you ample time to build consistency."
    },
    {
      id: "faq-5",
      question: "Do you offer annual memberships?",
      answer: "Yes, our Annual membership is our highest-rated and most cost-effective plan at ₹6,000 for a full year of training (saving you ₹2,400 compared to month-to-month plans)."
    },
    {
      id: "faq-6",
      question: "How can I contact the gym?",
      answer: "You can reach Pawar Fitness directly by calling our phone number at 7415493336, sending us a message on WhatsApp via our quick contact button, or filling out the contact form right here on our website."
    },
    {
      id: "faq-7",
      question: "How can I register?",
      answer: "You can register online immediately by clicking any 'Join Now' button on this website to open our registration form with your chosen plan pre-selected, or visit our gym in Badora, Betul in person to get signed up."
    },
    {
      id: "faq-8",
      question: "Can beginners join Pawar Fitness?",
      answer: "Absolutely! Pawar Fitness welcomes everyone from total beginners to experienced lifters. Our community and coaches provide guidance on equipment usage, form safety, and foundational routines."
    }
  ] as FAQItem[],

  socialLinks: [
    { name: "Instagram", url: "#", handle: "@pawarfitness_betul" },
    { name: "Facebook", url: "#", handle: "Pawar Fitness Betul" },
    { name: "YouTube", url: "#", handle: "Pawar Fitness" },
    { name: "WhatsApp", url: `https://wa.me/917415493336`, handle: "+91 7415493336" }
  ]
};
