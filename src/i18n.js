import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        opportunities: 'Opportunities',
        success: 'Success',
        about: 'About',
        contact: 'Contact',
        english: 'English',
        sinhala: 'සිංහල',
        tamil: 'தமிழ்',
      },
      header: {
        title: 'Open Source Website',
        subtitle: 'Building the future with technology',
        signup: 'Sign Up',
        login: 'Log in',
      },
      about: {
        title: 'ABOUT',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, ullamcorper id risus eu, consectetur consectetur purus. Etiam sagittis in eros ac sollicitudin.',
      },
      services: {
        title: 'SERVICES',
        cards: {
          web: {
            title: 'Web Development',
            text: 'Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc.',
          },
          ecommerce: {
            title: 'E-Commerce Services',
            text: 'Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus.',
          },
          security: {
            title: 'Cyber Security',
            text: 'Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien.',
          },
        },
      },
      opportunities: {
        title: 'OPPORTUNITIES',
        subtitle: 'Discover how we can grow your digital presence with strategic products and services.',
        growth: 'Growth Strategy',
        growthText: 'Identify new market opportunities and refine your roadmap with data-driven planning.',
        brand: 'Brand Expansion',
        brandText: 'Enhance your brand with premium design, messaging, and customer experience.',
        optimization: 'Digital Optimization',
        optimizationText: 'Improve performance and conversions across every touchpoint in your online presence.',
      },
      success: {
        title: 'SUCCESS STORIES',
        subtitle: 'See how our clients gained better traction, conversions, and trust with tailored solutions.',
        ecommerce: {
          title: 'E-commerce Boost',
          text: 'A sales platform redesign delivered a 47% increase in checkout conversions in under three months.',
        },
        brand: {
          title: 'Brand Launch',
          text: 'A complete brand refresh helped a startup stand out and triple their qualified lead volume.',
        },
        performance: {
          title: 'Performance Growth',
          text: 'Optimization work reduced page load time by 65% while improving overall engagement.',
        },
      },
      contact: {
        title: 'CONTACT',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
      },
      footer: {
        brand: 'Dhanodya',
        tagline: 'Together for a better tomorrow.',
        quickLinks: 'Quick Links',
        contact: 'Contact',
        followUs: 'Follow Us',
        email: '📧 info@dhanodya.com',
        phone: '📞 +94 71 23456789',
        location: '📍 Bandarawela, Sri Lanka',
        copy: '© {{year}} Dhanodya. All Rights Reserved.',
      },
    },
  },
  si: {
    translation: {
      nav: {
        home: 'මුල් පිටුව',
        services: 'සේවා',
        opportunities: 'අවස්ථා',
        success: 'සාර්ථකතා',
        about: 'අප ගැන',
        contact: 'සම්බන්ධ වෙන්න',
        english: 'English',
        sinhala: 'සිංහල',
        tamil: 'தமிழ்',
      },
      header: {
        title: 'විවෘත මූලාශ්‍ර වෙබ් අඩවිය',
        subtitle: 'තොරතුරු තාක්ෂණයෙන් අනාගතය ගොඩනගමු',
        signup: 'ලියාපදිංචි වන්න',
        login: 'ඇතුල් වන්න',
      },
      about: {
        title: 'අප ගැන',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, ullamcorper id risus eu, consectetur consectetur purus. Etiam sagittis in eros ac sollicitudin.',
      },
      services: {
        title: 'සේවා',
        cards: {
          web: {
            title: 'වෙබ් සංවර්ධනය',
            text: 'Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc.',
          },
          ecommerce: {
            title: 'ඊ-වෙළඳ සේවා',
            text: 'Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus.',
          },
          security: {
            title: 'සයිබර් ආරක්ෂාව',
            text: 'Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien.',
          },
        },
      },
      opportunities: {
        title: 'අවස්ථා',
        subtitle: 'استදහ පාරිබොගික අධ්‍යාපනයක් අතරින් අපි ඔබේ ඩිජිටල් ව්‍යවහාරය වර්ධනය කළ හැක.',
        growth: 'වර්ධන حکمت තාක්ෂණය',
        growthText: 'නිර්දේශ විශ්ලේෂණය හා ඔබේ මාර්ගපද භාවිතය වඩා හොඳයි.',
        brand: 'වෙළඳ නාම පුළුල් කිරීම',
        brandText: 'ප්‍රීමියම් නිර්මාණය, පණිවිඩ, සහ පාරිභෝගික අත්දැකීම් සමඟ ඔබේ වෙළඳ නාමය වර්ධනය කරන්න.',
        optimization: 'ඩිජිටල් උපරිම කිරීම',
        optimizationText: 'ඔබේ සිවමින් පිරුණු ස්පර්ශ නුවණ වේගය හා පරිවර්තන වැඩි කරන්න.',
      },
      success: {
        title: 'සාර්ථක කථා',
        subtitle: 'අපගේ ගනුදෙනුකරුවන්ට සුවිශේෂී කාර්ය සාධනය, පරිවර්තන සහ විශ්වාසය ලබාදුන් ආකාරය බලන්න.',
        ecommerce: {
          title: 'ඊ-වෙළඳ වර්ධනය',
          text: 'අලෙවි වේදිකාව නැවත නිර්මාණය කිරීමෙන් පසු ත්‍රිගුණයෙන් වැඩි කුලී පරිවර්තන ලබාගන්නා ලදී.',
        },
        brand: {
          title: 'වෙළඳ නාම ප්‍රවර්ධනය',
          text: 'පූර්ණ වෙළඳ නාම නැවතුමක් ආරම්භකයකුට වසරකට ත්‍රිගුණිත සුදුසු ලීඩ් ප්‍රමාණයක් ලබාදුන්නේය.',
        },
        performance: {
          title: 'කාර්ය සාධනයේ ඉහළ යාම',
          text: 'උපරිම කිරීමෙන් පිටුවේ පූරණ කාලය 65%කින් අඩු වුනා අතර සමස්ත නිරතුරුව වැඩිවිය.',
        },
      },


      contact: {
        title: 'සම්බන්ධ වෙන්න',
        name: 'නම',
        email: 'ඊමේල්',
        subject: 'විෂය',
        message: 'පණිවිඩය',
        submit: 'පණිවිඩය යවන්න',
      },
      footer: {
        brand: 'Dhanodya',
        tagline: 'හෙට දවස සඳහා එකට.',
        quickLinks: 'දඩුවම් සබැඳි',
        contact: 'සම්බන්ධීකරණය',
        followUs: 'අප අනුගමනය කරන්න',
        email: '📧 info@dhanodya.com',
        phone: '📞 +94 71 23456789',
        location: '📍 බණ්ඩාරවෙල, ශ්‍රී ලංකාව',
        copy: '© {{year}} Dhanodya. සියලු හිමිකම් ඇවිරිණි.',
      },
    },
  },
  ta: {
    translation: {
      nav: {
        home: 'முகப்பு',
        services: 'சேவைகள்',
        opportunities: 'வாய்ப்புகள்',
        success: 'வெற்றி',
        about: 'எங்களைப் பற்றி',
        contact: 'தொடர்பு',
        english: 'English',
        sinhala: 'සිංහල',
        tamil: 'தமிழ்',
      },
      header: {
        title: 'திறந்த விட்டவெளி வலைதளம்',
        subtitle: 'தொழில்நுட்பத்துடன் எதிர்காலத்தை கட்டமைக்கிறது',
        signup: 'பதிவு செய்ய',
        login: 'உள்நுழைய',
      },
      about: {
        title: 'ABOUT',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, ullamcorper id risus eu, consectetur consectetur purus. Etiam sagittis in eros ac sollicitudin.',
      },
      services: {
        title: 'சேவைகள்',
        cards: {
          web: {
            title: 'வலை மேம்பாடு',
            text: 'Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc.',
          },
          ecommerce: {
            title: 'மின் வர்த்தக சேவைகள்',
            text: 'Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus.',
          },
          security: {
            title: 'இணைய பாதுகாப்பு',
            text: 'Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien.',
          },
        },
      },
      opportunities: {
        title: 'வாய்ப்புகள்',
        subtitle: 'தொழில்நுட்ப பூர்வமான தயாரிப்புகள் மற்றும் சேவைகள் மூலம் உங்கள் டிஜிட்டல் எப்படி வளர்த்துக்கொள்ளலாம் என்பதை கண்டறியுங்கள்.',
        growth: 'வளர்ச்சி யோசனை',
        growthText: 'மார்க்கெட் வாய்ப்புகளை கண்டுபிடித்து தரவினை ஆதாரமாகக் கொண்டு உங்கள் பாதையை மேம்படுத்துங்கள்.',
        brand: 'வாடிக்கையாளர் விரிவு',
        brandText: 'திறமையான வடிவமைப்பு, செய்தி மற்றும் வாடிக்கையாளர் அனுபவத்துடன் உங்கள் பிராண்டை உயர்த்துங்கள்.',
        optimization: 'டிஜிட்டல் மாய்க்கை',
        optimizationText: 'ஒவ்வொரு போட்டியில் செயல்திறன் மற்றும் மாற்றங்களை மேம்படுத்துங்கள்.',
      },
      success: {
        title: 'வெற்றி கதைகள்',
        subtitle: 'உங்கள் வாடிக்கையாளர்கள் எவ்வாறு சிறந்த கவர்ச்சியும் நம்பிக்கையும் பெற்றனர் என்பதைப் பாருங்கள்.',
        ecommerce: {
          title: 'மின்னணு வர்த்தக வளர்ச்சி',
          text: 'ஒரு விற்பனை தளத்தை மறுஅமைத்தல் மூன்று மாதங்களுக்குள் 47% அதிகமான சேகரிப்புகளைத் தந்தது.',
        },
        brand: {
          title: 'பிராண்டு அறிமுகம்',
          text: 'ஒரு முழுமையான பிராண்ட் மறுசீரமைப்பு துவக்கநிறுவனத்திற்கு தகுந்த வழிகாட்டுதல்கள் மூலமாக மூட்டியாக்கப்பட்டுவிட்டது.',
        },
        performance: {
          title: 'செயல்திறன் வளர்ச்சி',
          text: 'பயன்பாட்டு மேம்பாட்டு பணிகள் பக்க ஏற்றத்தை 65% குறைத்தன மற்றும் ஈடுபாட்டை உயர்த்தின.',
        },
      },
      contact: {
        title: 'தொடர்பு',
        name: 'பெயர்',
        email: 'மின்னஞ்சல்',
        subject: 'தலைப்பு',
        message: 'செய்தி',
        submit: 'செய்தியை அனுப்பு',
      },
      footer: {
        brand: 'Dhanodya',
        tagline: 'சிறந்த நாளிற்காக ஒன்றாக.',
        quickLinks: 'விரைவான இணைப்புகள்',
        contact: 'தொடர்பு',
        followUs: 'எங்களை பின்தொடருங்கள்',
        email: '📧 info@dhanodya.com',
        phone: '📞 +94 71 23456789',
        location: '📍 பண்டாரவெளை, இலங்கை',
        copy: '© {{year}} Dhanodya. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
