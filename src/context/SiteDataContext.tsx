import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface SiteData {
  siteName: string;
  name: string;
  phoneNumber: string;
  spacedPhoneNumber: string;
  pic: string;
  email: string;
  address: string;
  smallAddress: string;
  rzpkey: string;
  location: {
    latitude: number;
    longitude: number;
  };
  socialAccounts: {
    type?: string;
    logo?: string;
    name?: string;
    url: string;
    avatar: string;
    phoneNumber?: string;
    accountName?: string;
    imageUrl?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  pages: {
    testimonials: {
      name: string;
      beforeWeight: number;
      afterWeight: number;
      rating: number;
      description: string;
      image: string;
    }[];
    blogs: {
      blogId: number;
      title: string;
      description: string[];
      date: string;
      imgSrc: string;
    }[];
    plans: {
      wl: {
        id: string;
        title: string;
        cutPrice: number;
        price: number;
        savePrice: number;
        description: string;
      }[];
      wg: {
        id: string;
        title: string;
        cutPrice: number;
        price: number;
        savePrice: number;
        description: string;
      }[];
    };
  };
}

interface MyContextType {
  data: SiteData | null;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const useSiteData = (): SiteData | null => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context.data;
};

const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fitnessfreaksindians.com/data.json",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        // setTimeout(() => {
        //   const jsonData = {
        //     siteName: "Fitness Freaks Indians",
        //     name: "Fitness Freaks Indians",
        //     phoneNumber: "+917087996054",
        //     spacedPhoneNumber: "+91 70879 96054",
        //     pic: "/assets/images/owner.jpeg",
        //     email: "contactus@fitnessfreaksindians.com",
        //     address: "Jalandhar, Punjab, India, 144002",
        //     smallAddress: "Jalandhar, Punjab, India, 144002",
        //     rzpkey: "rzp_test_OTMxh82GdR6hI7",
        //     location: { latitude: 12.9716, longitude: 77.5946 },
        //     socialAccounts: [
        //       {
        //         type: "instagram",
        //         logo: "/instagram.png",
        //         name: "Instagram",
        //         url: "https://instagram.com/fitness_freaks_indians",
        //         avatar: "/assets/images/owner.jpeg",
        //       },
        //       {
        //         type: "facebook",
        //         logo: "/facebook.png",
        //         name: "Facebook",
        //         url: "https://facebook.com/fitness_freaks_indians",
        //         avatar:
        //           "https://as1.ftcdn.net/v2/jpg/04/72/28/92/1000_F_472289235_dpNeih7IVEAL11b5Ilp411GPVLsuHqwU.jpg",
        //       },
        //       {
        //         type: "twitter",
        //         logo: "/twitter.png",
        //         name: "Twitter",
        //         url: "https://twitter.com/fitness_freaks_indians",
        //         avatar:
        //           "https://as1.ftcdn.net/v2/jpg/04/72/28/92/1000_F_472289235_dpNeih7IVEAL11b5Ilp411GPVLsuHqwU.jpg",
        //       },
        //       {
        //         url: "https://snapchat.com/fitness_freaks_indians",
        //         avatar:
        //           "https://as1.ftcdn.net/v2/jpg/04/72/28/92/1000_F_472289235_dpNeih7IVEAL11b5Ilp411GPVLsuHqwU.jpg",
        //       },
        //       {
        //         phoneNumber: "+919912345678",
        //         accountName: "Fitness Freaks Indians",
        //         avatar: "https://avatars.githubusercontent.com/u/50250422?v=4",
        //       },
        //       {
        //         url: "https://linkedin.com/fitness_freaks_indians",
        //         imageUrl:
        //           "https://as1.ftcdn.net/v2/jpg/04/72/28/92/1000_F_472289235_dpNeih7IVEAL11b5Ilp411GPVLsuHqwU.jpg",
        //       },
        //     ],
        //     faqs: [
        //       {
        //         question: "How will I get support?",
        //         answer:
        //           "You will receive direct 1-on-1 training from me or a certified coach. All your doubts/calls will be answered within 24 hours on the training number.",
        //       },
        //       {
        //         question: "Who will monitor my progress?",
        //         answer:
        //           "Your progress will be monitored by me or a team member (certified coach) throughout the training.",
        //       },
        //       {
        //         question: "Do I need to take supplements?",
        //         answer:
        //           "We will design everything according to your body's needs and fitness goals. While a detailed supplement guide can be provided, your diet plan will primarily focus on whole foods.",
        //       },
        //       {
        //         question:
        //           "Is your meal plan budget-friendly and easily available?",
        //         answer:
        //           "Yes, the meal plan includes budget-friendly foods readily available in India. It's a simple whole-based diet ensuring proper nutrition.",
        //       },
        //       {
        //         question: "Can I train at home, with or without equipment?",
        //         answer:
        //           "Absolutely! We have designed easy-to-follow home-based workouts tailored to your available space and equipment, whether you have equipment or not.",
        //       },
        //       {
        //         question: "Will I get results if I'm vegetarian?",
        //         answer:
        //           "Yes, you will. Your meal and workout plans will be adjusted accordingly to ensure you achieve your desired results even as a vegetarian.",
        //       },
        //       {
        //         question: "Do you provide PDFs?",
        //         answer:
        //           "No, we provide personalized 1-on-1 guidance. You will receive proper workout videos specifically designed for you, along with a dynamic diet plan that adjusts based on your progress.",
        //       },
        //     ],
        //     pages: {
        //       testimonials: [
        //         {
        //           name: "Amer Ali",
        //           beforeWeight: 92,
        //           afterWeight: 80,
        //           rating: 4.4,
        //           description: "Never felt better!",
        //           image: "/assets/images/testimonials/IMG_000107.jpg",
        //         },
        //         {
        //           name: "Sriram Reddy",
        //           beforeWeight: 98,
        //           afterWeight: 78,
        //           rating: 4.5,
        //           description: "Amazing transformation journey!",
        //           image: "/assets/images/testimonials/IMG_000101.jpg",
        //         },
        //         {
        //           name: "Jayesh patel",
        //           beforeWeight: 110,
        //           afterWeight: 80,
        //           rating: 4,
        //           description: "Lost 10 kgs in just a month!",
        //           image: "/assets/images/testimonials/IMG_000102.jpg",
        //         },
        //         {
        //           name: "Kunal",
        //           beforeWeight: 120,
        //           afterWeight: 80,
        //           rating: 4.8,
        //           description: "Feeling healthier than ever!",
        //           image: "/assets/images/testimonials/IMG_000103.jpg",
        //         },
        //         {
        //           name: "Sudhir Reddy",
        //           beforeWeight: 89,
        //           afterWeight: 75,
        //           rating: 4.3,
        //           description: "Transformed my life!",
        //           image: "/assets/images/testimonials/IMG_000104.jpg",
        //         },
        //         {
        //           name: "Mathew",
        //           beforeWeight: 84,
        //           afterWeight: 70,
        //           rating: 4.7,
        //           description: "Healthier and happier!",
        //           image: "/assets/images/testimonials/IMG_000105.jpg",
        //         },
        //         {
        //           name: "Gurpharan Karthikeyan",
        //           beforeWeight: 75,
        //           afterWeight: 73,
        //           rating: 4.9,
        //           description: "Fitness journey success story!",
        //           image: "/assets/images/testimonials/IMG_000106.jpg",
        //         },
        //         {
        //           name: "Avinash",
        //           beforeWeight: 98,
        //           afterWeight: 83,
        //           rating: 4.2,
        //           description:
        //             "This is a simple testimonial card with comparison of a man",
        //           image: "/assets/images/testimonials/IMG_000100.jpg",
        //         },
        //         {
        //           name: "Abhishek Arora",
        //           beforeWeight: 90,
        //           afterWeight: 81,
        //           rating: 4.4,
        //           description: "Achieved my fitness goals!",
        //           image: "/assets/images/testimonials/IMG_000108.jpg",
        //         },
        //         {
        //           name: "Ajit Vichare",
        //           beforeWeight: 89,
        //           afterWeight: 78,
        //           rating: 4.6,
        //           description: "Living a healthier lifestyle!",
        //           image: "/assets/images/testimonials/IMG_000109.jpg",
        //         },
        //         {
        //           name: "Sudarshan Reddy",
        //           beforeWeight: 85,
        //           afterWeight: 76,
        //           rating: 4.2,
        //           description: "Proud of my progress!",
        //           image: "/assets/images/testimonials/IMG_000110.jpg",
        //         },
        //         {
        //           name: "Nikhil Khandelwal",
        //           beforeWeight: 94,
        //           afterWeight: 81,
        //           rating: 4.8,
        //           description: "Transforming one day at a time!",
        //           image: "/assets/images/testimonials/IMG_000111.jpg",
        //         },
        //         {
        //           name: "Mayank Aggarwal",
        //           beforeWeight: 86,
        //           afterWeight: 75,
        //           rating: 4,
        //           description: "Fitness journey: A new beginning!",
        //           image: "/assets/images/testimonials/IMG_000112.jpg",
        //         },
        //         {
        //           name: "Nikhilesh Arigela",
        //           beforeWeight: 75,
        //           afterWeight: 68,
        //           rating: 4.5,
        //           description: "Healthy habits pay off!",
        //           image: "/assets/images/testimonials/IMG_000113.jpg",
        //         },
        //         {
        //           name: "Sarvesh Kalal",
        //           beforeWeight: 82,
        //           afterWeight: 76,
        //           rating: 4.3,
        //           description: "Becoming the best version of myself!",
        //           image: "/assets/images/testimonials/IMG_000114.jpg",
        //         },
        //         {
        //           name: "Jaswant Singh",
        //           beforeWeight: 79,
        //           afterWeight: 72,
        //           rating: 4.7,
        //           description: "Fitness journey: A success story!",
        //           image: "/assets/images/testimonials/IMG_000115.jpg",
        //         },
        //         {
        //           name: "Avinash",
        //           beforeWeight: 98,
        //           afterWeight: 83,
        //           rating: 4.2,
        //           description:
        //             "This is a simple testimonial card with comparison of a man",
        //           image: "/assets/images/testimonials/IMG_000100.jpg",
        //         },
        //       ],
        //       blogs: [
        //         {
        //           blogId: 0,
        //           title: "Top 5 Tips for Effective Weight Loss",
        //           description: [
        //             "In our journey towards a healthier lifestyle, achieving and maintaining a healthy weight is often a key goal. However, with so much information available, it can be challenging to navigate the best strategies for successful weight loss. To help you on this path, here are the top 5 tips for effective weight loss that you can start implementing today.",
        //             "Mindful Eating: One of the fundamental aspects of successful weight loss is mindful eating. This involves paying attention to what and how much you eat, without distractions like TV or smartphones. Focus on savoring each bite, and stop eating when you feel comfortably full. Avoid emotional eating and be aware of portion sizes.",
        //             "Regular Exercise Routine: Incorporating regular physical activity into your routine is crucial for weight loss. Aim for a combination of cardio exercises (like brisk walking, cycling, or swimming) and strength training (using weights or bodyweight exercises) to burn calories and build muscle. Visit Fitness Freaks Indians for personalized diet and workout plans and exercise tips tailored for Indian lifestyles.",
        //             "Balanced Diet: Adopting a balanced diet that includes a variety of nutrient-dense foods is essential. Focus on whole grains, lean proteins, fruits, vegetables, and healthy fats. Minimize processed foods, sugary drinks, and excessive snacks. Drink plenty of water and incorporate fiber-rich foods to help you feel full and satisfied.",
        //             "Get Adequate Sleep: Quality sleep plays a vital role in weight management and overall health. Lack of sleep can disrupt hormones that regulate appetite and cravings, leading to weight gain. Aim for 7-9 hours of uninterrupted sleep each night to support your weight loss efforts.",
        //             "Stay Consistent and Patient: Last but not least, consistency and patience are key to successful weight loss. Set realistic goals and track your progress over time. Celebrate small victories and don't get discouraged by temporary setbacks.",
        //             "Remember, sustainable weight loss takes time and effort.",
        //             "For more personalized guidance and tips on weight loss tailored to Indian lifestyles, visit Fitness Freaks Indians. Our platform offers a wealth of resources, including diet plans, workout routines, and expert advice to help you achieve your fitness goals effectively.",
        //             "Remember, weight loss is not just about numbers on a scale; it's about improving your overall health and well-being. By incorporating these tips into your daily life and staying committed to your goals, you'll be on your way to a healthier and happier you.",
        //             "Stay motivated, stay focused, and enjoy the journey towards a fitter and healthier lifestyle!",
        //           ],
        //           date: "April 15, 2024",
        //           imgSrc:
        //             "https://assets.gqindia.com/photos/63f5db21b295b6a9921513ed/3:2/w_1620,h_1080,c_limit/factors-that-affect-how-long-it-takes-you-to-lose-weight_01.jpeg",
        //         },
        //         {
        //           blogId: 1,
        //           title: "Top 5 Tips for Healthy Weight Gain",
        //           description: [
        //             "While many people focus on weight loss, there are also individuals who struggle to gain weight in a healthy and sustainable manner. If you're looking to add lean muscle mass and increase your overall body weight, these top 5 tips for healthy weight gain will help you achieve your goals effectively.",
        //             "Calorie Surplus with Nutrient-Dense Foods: To gain weight, you need to consume more calories than your body burns in a day. However, it's essential to choose nutrient-dense foods that promote muscle growth and overall health. Include plenty of protein-rich foods like eggs, chicken, fish, lentils, and tofu in your diet. Additionally, incorporate healthy fats from sources like avocados, nuts, seeds, and olive oil. Visit Fitness Freaks Indians for personalized diet plans focused on healthy weight gain.",
        //             "Frequent and Balanced Meals: Instead of relying solely on large meals, aim to eat smaller, balanced meals throughout the day. This approach helps maintain a consistent calorie intake and keeps your metabolism active. Include a mix of carbohydrates, proteins, and fats in each meal to support muscle growth and recovery.",
        //             "Strength Training Workouts: Incorporate regular strength training workouts into your exercise routine to build muscle mass. Focus on compound exercises like squats, deadlifts, bench presses, and pull-ups that target multiple muscle groups. Lift progressively heavier weights over time to stimulate muscle growth. Check out workout plans tailored for weight gain at Fitness Freaks Indians.",
        //             "Optimize Post-Workout Nutrition: After intense workouts, your body needs adequate nutrients to recover and grow. Consume a post-workout meal or shake containing protein and carbohydrates to replenish glycogen stores and promote muscle repair. Consider options like a protein shake with banana or a chicken and sweet potato meal.",
        //             "Stay Consistent and Patient: Weight gain, especially in the form of muscle mass, takes time and dedication. Stay consistent with your diet and workout routine, and be patient with the results. Monitor your progress regularly and make adjustments as needed to continue progressing towards your weight gain goals.",
        //             "For more personalized guidance and tips on healthy weight gain tailored to Indian lifestyles, visit Fitness Freaks Indians. Our platform offers expert advice, customized diet plans, and workout routines designed specifically to help you achieve your weight gain objectives in a sustainable and healthy way.",
        //             "Remember, healthy weight gain is about more than just increasing numbers on a scale; it's about building a stronger, fitter body. By following these tips and utilizing the resources available at Fitness Freaks Indians, you'll be well on your way to achieving your weight gain goals effectively and efficiently.",
        //             "Stay motivated, stay focused, and enjoy the journey towards a stronger and healthier you!",
        //           ],
        //           date: "May 1, 2024",
        //           imgSrc:
        //             "https://www.healthifyme.com/blog/wp-content/uploads/2023/01/shutterstock_1928472866-min.jpg",
        //         },
        //         {
        //           blogId: 2,
        //           title: "Tea or Coffee: Which One is Better for Your Fitness?",
        //           description: [
        //             "Tea and coffee are two of the most beloved beverages in India, cherished for their flavor and often enjoyed throughout the day. But when it comes to choosing between tea and coffee for your fitness journey, which one comes out on top? Let's explore the health aspects of both without making sweeping claims, helping you make an informed decision based on your individual needs.",
        //             "Tea: The Elixir of Wellness",
        //             "Tea holds a special place in Indian culture, with varieties like green tea, black tea, and herbal infusions widely consumed for their potential health benefits. Here’s why tea might be a good fit for your fitness routine:",
        //             "Rich in Antioxidants: Tea, especially green tea, is loaded with antioxidants that can help combat free radicals in the body and support overall health.",
        //             "Potential Metabolism Boost: Some studies suggest that certain compounds in tea, like catechins in green tea, may support metabolism and fat burning.",
        //             "Calming and Hydrating: Herbal teas like chamomile or peppermint can have calming effects, making them a soothing choice post-workout or before bedtime.",
        //             "Coffee: The Energizing Brew",
        //             "For many, a cup of coffee is synonymous with a burst of energy and alertness. Here’s why coffee might be part of your fitness routine:",
        //             "Instant Energy Boost: Coffee contains caffeine, which can enhance mental focus and physical performance during workouts.",
        //             "May Aid Fat Burning: Caffeine is known to stimulate the nervous system, potentially increasing metabolism and promoting fat oxidation.",
        //             "Social and Enjoyable: Coffee can be a social beverage, enjoyed with friends or colleagues, adding to its appeal beyond its health benefits.",
        //             "Choosing What Works for You",
        //             "When it comes down to it, the choice between tea and coffee depends on your individual preferences and how your body responds to caffeine. Here are a few tips to help you decide:",
        //             "Listen to Your Body: Pay attention to how tea or coffee makes you feel. Some people are more sensitive to caffeine than others.",
        //             "Moderation is Key: Both tea and coffee can be part of a balanced diet. Enjoy them in moderation and be mindful of added sugars or high-fat creamers.",
        //             "Stay Hydrated: While tea and coffee can contribute to daily fluid intake, remember to drink plenty of water throughout the day for optimal hydration.",
        //             "Ultimately, whether you prefer the calming ritual of tea or the invigorating kick of coffee, incorporating either into your fitness routine can be part of a healthy lifestyle. Visit Fitness Freaks Indians for more personalized tips and guidance on nutrition and fitness tailored for Indian lifestyles.",
        //             "Remember, the key to a successful fitness journey is making choices that align with your goals and preferences. So, go ahead, savor your cuppa, and enjoy the journey towards a healthier you!",
        //           ],
        //           date: "May 10, 2024",
        //           imgSrc:
        //             "https://www.forbes.com/health/wp-content/uploads/2023/04/coffee_vs_tea.jpeg.jpg",
        //         },
        //       ],
        //       plans: {
        //         wl: [
        //           {
        //             id: "wl1",
        //             title: "1 Month Subscription",
        //             cutPrice: 2000,
        //             price: 1499,
        //             savePrice: 501,
        //             description: "",
        //           },
        //           {
        //             id: "wl2",
        //             title: "3 Month Subscription",
        //             cutPrice: 4500,
        //             price: 2999,
        //             savePrice: 1501,
        //             description: "Only ₹ 999 per month.",
        //           },
        //           {
        //             id: "wl3",
        //             title: "6 Month Subscription",
        //             cutPrice: 8999,
        //             price: 4449,
        //             savePrice: 4550,
        //             description: "Only ₹ 740 per month.",
        //           },
        //         ],
        //         wg: [
        //           {
        //             id: "wg1",
        //             title: "1 Month Subscription",
        //             cutPrice: 2000,
        //             price: 1499,
        //             savePrice: 501,
        //             description: "",
        //           },
        //           {
        //             id: "wg2",
        //             title: "3 Month Subscription",
        //             cutPrice: 4500,
        //             price: 2999,
        //             savePrice: 1501,
        //             description: "Only ₹ 999 per month.",
        //           },
        //           {
        //             id: "wg3",
        //             title: "6 Month Subscription",
        //             cutPrice: 8999,
        //             price: 4449,
        //             savePrice: 4550,
        //             description: "Only ₹ 740 per month.",
        //           },
        //         ],
        //       },
        //     },
        //   };
        //   setData(jsonData as any);
        // }, 5000);
        setData(jsonData as any);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const contextValue: MyContextType = {
    data,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContextProvider, useSiteData };
