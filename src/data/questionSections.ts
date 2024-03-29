import { IQuestionData } from "../interfaces/IQuestionData";
import { IQuestionSection } from "../interfaces/IQuestionSection";
import { choices } from "./choices";

const getOptionsByName = (questionNames: string[]) => {
  return questionNames.map((name) => {
    return { ...choices[name], value: name };
  });
};

export const questionRecord: Record<string, IQuestionData> = {
  os: {
    questionType: "single_select",
    label: "Please select one",
    options: getOptionsByName(["ios", "android"]),
  },
  ios_framework: {
    questionType: "single_select",
    label: "What framework is your app developed on?",
    options: getOptionsByName([
      "ios",
      "ionic",
      "cordova",
      "flutter",
      "unity",
      "react-native",
      "xamarin",
      "xamarin-f",
      "expo",
      "native-script",
      "other",
    ]),
  },
  android_framework: {
    questionType: "single_select",
    label: "What framework is your app developed on?",
    options: getOptionsByName([
      "android",
      "ionic",
      "cordova",
      "flutter",
      "unity",
      "react-native",
      "xamarin",
      "xamarin-f",
      "expo",
      "native-script",
      "other",
    ]),
  },
  sessions: {
    questionType: "single_select",
    label: "How many monthly sessions does each app receive?",
    hint: "A session is every time a user opens the app, uses it, and when they put the app into the background, the session ends.",
    options: getOptionsByName(["low", "mid", "high"]),
  },
  analytics: {
    questionType: "multi_select",
    label: "What analytics tools are you currently using with your app?",
    hint: "Please select all that apply",
    options: getOptionsByName([
      "google",
      "firebase",
      "adobe",
      "mixpanel",
      "amplitude",
      "clever-tap",
      "segment",
      "instabug",
      "appsflyer",
      "branch",
      "adjust",
      "sentry",
      "flurry",
      "others",
      "no-analytics",
    ]),
  },
  applinks: {
    questionType: "text",
    type: "url",
    hint: "Please include a Google Play Store or App Store link to your app (if available)",
    placeholder: "Insert App link here",
    label: "App Links",
  },
  improvement: {
    questionType: "checkbox_group",
    hint: "Please select all that apply",
    label: "What areas of your app are you looking to improve with UXCam?",
    options: [
      "Improve overall UX",
      "Increase app retention",
      "Increase key conversions",
      "Improve app store rating & NPS",
      "Support Customer Success and Engineering teams in resolving bugs & crashes",
      "Capture qualitative insights and understand why users drop-off",
      "Increase feature adoption",
      "Improve onboarding experience",
      "Understand in-app user journeys",
      "Incorporate UX feedback into product research and development",
      "Other (please specify at the bottom of the form)",
    ],
  },
  email: {
    questionType: "text",
    type: "email",
    placeholder: "name@company.com",
    label: "Primary contact email",
  },
  otherFramework: {
    questionType: "text",
    placeholder: "Framework of choice",
    label: "Other Framework",
  },
  otherAnalytics: {
    questionType: "text",
    placeholder: "Other Analytics",
    label: "Other Analytics",
  },
  otherImprovement: {
    questionType: "text",
    placeholder: "Please state your concern",
    label: "Other",
  },
};

export const questionSections: IQuestionSection[] = [
  {
    name: "section_os",
    question: { name: "os", ...questionRecord.os, required: true, size: "md" },
  },
  {
    name: "section_framework",
    if: {
      condition: {
        questionId: "os",
        value: "ios",
      },
      question: {
        name: "ios_framework",
        ...questionRecord.ios_framework,
        required: true,
      },
    },
    else: {
      question: {
        name: "android_framework",
        ...questionRecord.android_framework,
        required: true,
      },
    },
    subquestions: [
      {
        condition: {
          equals: "other",
        },
        question: {
          name: "other_framework",
          ...questionRecord.otherFramework,
          required: true,
        },
      },
    ],
  },
  {
    name: "section_sessions",
    question: { name: "sessions", ...questionRecord.sessions, required: true },
  },
  {
    name: "section_analytics",
    question: {
      name: "analytics",
      ...questionRecord.analytics,
      required: true,
    },
    subquestions: [
      {
        condition: {
          has: "others",
        },
        question: {
          name: "other_analytics",
          ...questionRecord.otherAnalytics,
          required: true,
        },
      },
    ],
  },
  {
    name: "section_applinks",
    question: { name: "applinks", ...questionRecord.applinks },
  },
  {
    name: "section_improvement",
    question: {
      name: "improvement",
      ...questionRecord.improvement,
    },
    subquestions: [
      {
        condition: { has: "Other (please specify at the bottom of the form)" },
        question: {
          name: "other_improvement",
          ...questionRecord.otherImprovement,
          required: true,
        },
      },
    ],
  },
  {
    name: "section_email",
    question: { name: "email", ...questionRecord.email, required: true },
  },
];
