export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/ramesh.png",
    name: "Dr. Ramesh Sharma - Cardiologist",
  },
  {
    image: "/assets/images/priya.png",
    name: "Dr. Priya Mehta - Dermatologist",
  },
  {
    image: "/assets/images/arvind.png",
    name: "Dr. Arvind Gupta - Neurologist",
  },
  {
    image: "/assets/images/neha.png",
    name: "Dr. Neha Singh - Pediatrician",
  },
  {
    image: "/assets/images/kiran.png",
    name: "Dr. Kiran Verma - Orthopedic Surgeon",
  },
  {
    image: "/assets/images/sanjay.png",
    name: "Dr. Sanjay Kapoor - Oncologist",
  },
  {
    image: "/assets/images/anjali.png",
    name: "Dr. Anjali Deshmukh - Gynecologist",
  },
  {
    image: "/assets/images/ravi.png",
    name: "Dr. Ravi Patel - General Physician",
  },
  {
    image: "/assets/images/vikram.png",
    name: "Dr. Vikram Sethi - ENT Specialist",
  },
  {
    image: "/assets/images/aditi.png",
    name: "Dr. Aditi Choudhary - Ophthalmologist",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
