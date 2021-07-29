import React, { useEffect } from "react";
import PricingTrustedListItem from "./_PricingTrustedListItem";
import Aos from "aos";
import 'aos/dist/aos.css'
const List = [
  {
    Image: "https://i.imgur.com/2Tgm21F.png",
    Name: "Ronith",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing. The time and his hesitation to solving Math problems has reduced immensely and the confidence in his approach improved a lot. Your app is simply too good! My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing."
  },
  {
    Image: "https://i.imgur.com/JWO3l5u.png",
    Name: "Nikhar",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing. The time and his hesitation to solving Math problems has reduced immensely and the confidence in his approach improved a lot. Your app is simply too good!"
  },
  {
    Image: "https://i.imgur.com/gnbwo4S.png",
    Name: "Azad",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing. The time and his hesitation to solving Math problems has reduced immensely."
  },
  {
    Image: "https://i.imgur.com/C4PzxYC.png",
    Name: "Fiyaz",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing."
  },
  {
    Image: "https://i.imgur.com/9EwuSht.png",
    Name: "Praveen",
    Title: "Parent",
    Text: "My child has started using EasyA and she is doing amazing!"
  },
  {
    Image: "https://i.imgur.com/ER1UyCX.png",
    Name: "Nakul",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing. The time and his hesitation to solving Math problems has reduced immensely and the confidence in his approach improved a lot. Your app is simply too good! My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing."
  },
  {
    Image: "https://i.imgur.com/oXae3n3.png",
    Name: "Rachit",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing. The time and his hesitation to solving Math problems has reduced immensely and the confidence in his approach improved a lot. Your app is simply too good!"
  },
  {
    Image: "https://i.imgur.com/1O7rXXK.png",
    Name: "Onkar",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing. The time and his hesitation to solving Math problems has reduced immensely."
  },
  {
    Image: "https://i.imgur.com/qz0g1yj.png",
    Name: "Jaga",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing."
  },
  {
    Image: "https://i.imgur.com/h3bgkwn.png",
    Name: "Manthan",
    Title: "Parent",
    Text: "My child has started using EasyA and she is doing amazing!"
  },
  {
    Image: "https://i.imgur.com/drrzTR2.png",
    Name: "Charan",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing. The time and his hesitation to solving Math problems has reduced immensely and the confidence in his approach improved a lot. Your app is simply too good! My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing."
  },
  {
    Image: "https://i.imgur.com/3Z7S3Uc.png",
    Name: "Maanav",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing. The time and his hesitation to solving Math problems has reduced immensely and the confidence in his approach improved a lot. Your app is simply too good!"
  },
  {
    Image: "https://i.imgur.com/3JNsFtk.png",
    Name: "Guneet",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing. The time and his hesitation to solving Math problems has reduced immensely."
  },
  {
    Image: "https://i.imgur.com/WGbIHR5.png",
    Name: "Agastya",
    Title: "Parent",
    Text:
      "My child has started using EasyA even more and the improvement in his performance we are witnessing is amazing."
  },
  {
    Image: "https://i.imgur.com/OKmV8oW.png",
    Name: "Hardik",
    Title: "Parent",
    Text: "My child has started using EasyA and she is doing amazing!"
  }
];
const PricingTrusted = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section className="Pricing-Trusted" data-aos="fade-up-right">
      <h2>Trusted by parents</h2>
      <p>See how parents and students get value from EasyA.</p>
      <div className="Pricing-Trusted-List">
        {List &&
          List.map((item, key) => (
            <PricingTrustedListItem key={key} {...item} />
          ))}
      </div>
    </section>
  );
};

export default PricingTrusted;
