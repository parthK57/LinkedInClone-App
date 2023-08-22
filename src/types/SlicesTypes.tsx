type UserDetails = {
  full_name: string;
  profile_image: string;
  header: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  finding_new_job: boolean;
  hiring: boolean;
  providing_services: boolean;
  profile_views: number;
  search_appearances: number;
  creator_mode: boolean;
  about: string | null;
  followers_count: number;
  email: string;
  birthdate: string;
  education: Array<EducationDetails> | null;
  licenses_certifications: Array<LicensesAndCertifications> | null;
  skills: Array<string> | null;
  interests: {
    companies: Companies;
    groups: Groups;
    news_letters: NewsLetters;
  };
  followers: Array<Follower> | null;
};

interface EducationDetails {
  institution: string;
  degree: string;
  specializaion: string | null;
  start_month: number | null;
  start_year: number | null;
  end_month: number | null;
  end_year: number | null;
}

interface LicensesAndCertifications {
  institution: string;
  course: string;
  issued_month: number | null;
  issued_year: number | null;
  link: string;
}

type Companies = Array<string> | null;

type Groups = Array<string> | null;

type NewsLetters = Array<NewsLetter> | null;

interface NewsLetter {
  letter_head: string;
  description: string;
  publish_frequency: string;
  company: string;
}

interface Follower {
  full_name: string;
  profile_image: string | null;
  header: string | null;
  city: string | null;
}
