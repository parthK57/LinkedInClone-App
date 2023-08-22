import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    value: {
      full_name: "Parth Kolgiri",
      profile_image: "https://media.licdn.com/dms/image/D4D03AQHcNEFrZfQosA/profile-displayphoto-shrink_400_400/0/1680590298094?e=1698278400&v=beta&t=DCtX7n8FiPI3aw66sf1ZNs2bVN5WLKg-rhrp0qYdn1U",
      header:
        "SDE | React, React Native, Node, PostgreSQL | Transforming ideas into realities",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      finding_new_job: true,
      hiring: false,
      providing_services: true,
      profile_views: 61,
      search_appearances: 10,
      creator_mode: false,
      about:
        "Hello! I am a technology enthusiast who likes to learn new things and implement them to solve real life problems. Currently I am working on sports analytics and augmented reality ed-tech.",
      followers_count: 243,
      email: "parth.kolgiri57@gmail.com",
      birthdate: "15/07",
      education: [
        {
          institution: "Savitribai Phule Pune University",
          degree: "Bachelors of Engineering",
          specializaion: "Electrical",
          start_month: 6,
          start_year: 2018,
          end_month: 5,
          end_year: 2022,
        },
        {
          institution: "Sangameshwar",
          degree: "HSC",
          specializaion: "Electrical",
          start_month: null,
          start_year: 2016,
          end_month: null,
          end_year: 2028,
        },
      ],
      licenses_certifications: [
        {
          institution: "Udemy",
          course: "NodeJS",
          issued_month: 2,
          issued_year: 2023,
          link: "",
        },
        {
          institution: "Udemy",
          course: "PostgreSQL",
          issued_month: 2,
          issued_year: 2023,
          link: "",
        },
        {
          institution: "HackerRank",
          course: "Python",
          issued_month: 12,
          issued_year: 2021,
          link: "",
        },
      ],
      skills: [
        "React.JS",
        "React Native",
        "Unity XR",
        "Redux.JS",
        "Amazon Web Services (AWS)",
        "Redis",
        "Vue.JS",
        "Oracle Database",
        "Express.JS",
        "C#",
        "Java",
        "PostgreSQL",
        "MySQL",
        "NumPy",
        "Nativewind",
        "Linux",
        "Pandas",
        "MSSQL",
        "Node.JS",
        "Git",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Python",
        "Web Development",
        "Cascading Style Sheets (CSS)",
        "HTML5",
      ],
      interests: {
        companies: ["Amazon", "Meta"],
        groups: [
          "Unity",
          "React Native Developers",
          "Unreal Engine Virtual Reality (VR) & Augmented Reality (AR) Developers",
        ],
        news_letters: [
          {
            letter_head: "HCLTech Trends and Insights",
            description:
              "Exploring technology's potential to accelerate innovation and create business value",
            publish_frequency: "monthly",
            company: "HCLTech",
          },
          {
            letter_head: "The Monthly Tech-in",
            description:
              'Your monthly source of "byte-sized" updates on Microsoft innovations and global tech advancements',
            publish_frequency: "monthly",
            company: "Microsoft",
          },
        ],
      },
      followers: [
        {
          full_name: "ABC",
          profile_image: "",
          header: "XYZ",
          city: "WASD",
        },
      ],
    } as UserDetails,
  },
  reducers: {
    setUserDetails: (state: any, action: any) => {
      state.value = action.payload as UserDetails;
    },
  },
});

export const { setUserDetails } = UserSlice.actions;
