import EnCommon from "./en/Common";
import EnHome from "./en/Home";
import EnAbout from "./en/About";
import EnSubjects from "./en/Subjects";
import EnHowItWorks from "./en/HowItWorks";
import EnTeachingMethods from "./en/TeachingMethods";
import EnATBT from "./en/ATBT";
import EnTestimonials from "./en/Testimonials";
import EnFAQs from "./en/FAQs";
import EnContactUs from "./en/ContactUs";
import EnWMCAL from "./en/WMCAL";
import EnPricing from "./en/Pricing";
import EnMonthlyPricing from "./en/MonthlyPricing";
import EnBlog from "./en/Blog";
import EnBlogDetails from "./en/BlogDetails";
import EnTerms from "./en/Terms";
import EnPrivacy from "./en/Privacy";
import EnAce from "./en/AceTestWithEasyA";

const AllTranslations = {
  en: {
    Common: EnCommon,
    Home: EnHome,
    About: EnAbout,
    Subjects: EnSubjects,
    HowItWorks: EnHowItWorks,
    AceTestWithEasyA: EnAce,
    TeachingMethods: EnTeachingMethods,
    ATBT: EnATBT,
    Testimonials: EnTestimonials,
    FAQs: EnFAQs,
    ContactUs: EnContactUs,
    WMCAL: EnWMCAL,
    Pricing: EnPricing,
    MonthlyPricing: EnMonthlyPricing,
    Blog: EnBlog,
    BlogDetails: EnBlogDetails,
    Terms: EnTerms,
    Privacy: EnPrivacy
  }
};

export default AllTranslations[process.env.REACT_APP_LANG] ||
  AllTranslations.en;
