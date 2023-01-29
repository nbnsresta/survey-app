interface IChoiceOption {
  label: string;
  image?: string;
}

export const choices: Record<string, IChoiceOption> = {
  android: {
    label: "Android",
    image: "https://www.svgrepo.com/show/475631/android-color.svg",
  },
  ios: {
    label: "iOS",
    image: "https://www.svgrepo.com/show/494336/apple.svg",
  },
  ionic: {
    label: "Ionic",
    image: "https://www.svgrepo.com/show/353912/ionic-icon.svg",
  },
  cordova: {
    label: "Cordova",
    image: "https://www.svgrepo.com/show/329942/apachecordova.svg",
  },
  flutter: {
    label: "Flutter",
    image: "https://www.svgrepo.com/show/373604/flutter.svg",
  },
  unity: {
    label: "Unity",
    image: "https://www.svgrepo.com/show/473818/unity.svg",
  },
  "react-native": {
    label: "React Native",
    image: "https://www.svgrepo.com/show/452092/react.svg",
  },
  xamarin: {
    label: "Xamarin",
    image: "https://www.svgrepo.com/show/354576/xamarin.svg",
  },
  "xamarin-f": {
    label: "Xamarin.forms",
    image: "https://www.svgrepo.com/show/306994/xamarin.svg",
  },
  expo: {
    label: "Expo",
    image: "https://www.svgrepo.com/show/353723/expo-icon.svg",
  },
  "native-script": {
    label: "NativeScript",
    image: "https://www.svgrepo.com/show/354101/nativescript.svg",
  },
  other: {
    label: "Other",
    image: "",
  },

  low: {
    label: "01 - 49",
  },
  mid: {
    label: "50-100",
  },
  high: {
    label: "101-200",
  },

  google: {
    label: "Google Analytics",
    image: "https://www.svgrepo.com/show/353804/google-analytics.svg",
  },
  firebase: {
    label: "Firebase",
    image: "https://www.svgrepo.com/show/373595/firebase.svg",
  },
  adobe: {
    label: "Adobe",
    image: "https://www.svgrepo.com/show/349582/adobe.svg",
  },
  mixpanel: {
    label: "Mixpanel",
    image:
      "https://imgs.search.brave.com/xhpFllJg5pzhQ5_c_mNSgZSzgxHWuWPpaDrHQRtrKNs/rs:fit:450:147:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAyL2Y1/LzNkLzAyZjUzZDhk/ZTZlYjExMmQ0ZTg1/MGIzMjJkZWUxNDFm/LnBuZw",
  },
  amplitude: {
    label: "Amplitude",
    image:
      "https://imgs.search.brave.com/IceGQIQVFmBZKW2GIdH4FUZsNPFkdQUVh4lAsRMtPIw/rs:fit:488:511:1/g:ce/aHR0cDovL2Fzc2V0/cy5zdGlja3BuZy5j/b20vaW1hZ2VzLzYy/OTg4N2VlN2U4MDJj/NGQxZWIyMDA4Mi5w/bmc",
  },
  "clever-tap": {
    label: "Clever Tap",
    image:
      "https://images.yourstory.com/cs/images/companies/CleverTapIcon-1629412200877.png",
  },
  segment: {
    label: "Segment",
    image: "https://www.svgrepo.com/show/354320/segment-icon.svg",
  },
  instabug: {
    label: "Instabug",
    image: "https://dashboard.instabug.com/images/Instabug-icon.svg",
  },
  appsflyer: {
    label: "Appsflyer",
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJVdFb-e4EMhXEZwLO6V9KFDAEINuEOTcHdrPeiw_Q",
  },
  branch: {
    label: "Branch",
    image: "https://www.svgrepo.com/show/353504/branch.svg",
  },
  adjust: {
    label: "Adjust",
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJVDIRLh8H_ciQeRzSVtvHY6HDWJHgfcTlyIDuzXzQ",
  },
  sentry: {
    label: "Sentry",
    image: "https://www.svgrepo.com/show/354332/sentry-icon.svg",
  },
  flurry: {
    label: "Flurry",
    image:
      "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_9ae8a18034c99df5dfb352584016cd16/flurry-analytics.png",
  },
  others: {
    label: "Others",
    image: "",
  },
  "no-analytics": {
    label: "No Analytics",
    image: "",
  },
};
