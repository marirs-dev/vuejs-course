const App = {
  data() {
    return {
      courseList: [
        {
          id: "lco1",
          courseName: "Django Full stack",
          subtitle: "Learn Django with postgres",
          price: "199",
          courseImage: "django.png",
          url: "https://www.enterprisedb.com/postgres-tutorials/how-use-postgresql-django",
        },
        {
          id: "lco2",
          courseName: "Interview Preparation",
          subtitle: "Crack the FAANG Interview",
          price: "1999",
          courseImage: "interview.png",
          url: "https://www.geeksforgeeks.org/how-to-prepare-for-faang-interviews-faang-interview-prep-plan/",
        },
        {
          id: "lco3",
          courseName: "React Native",
          subtitle: "Build Mobile Apps",
          price: "299",
          courseImage: "rn.png",
          url: "https://www.pluralsight.com/paths/build-mobile-applications-with-react-native#:~:text=With%20React%20Native-,React%20Native%20is%20an%20open%2Dsource%20mobile%20application%20framework%20used,can%20be%20shared%20across%20platforms.",
        },
      ],
    };
  },
};

Vue.createApp(App).mount("#vapp");
