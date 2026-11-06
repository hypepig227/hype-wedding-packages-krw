import { useState } from "react";

const PHOTOGRAPHERS = {
  jeju: [
    {
      id: "jeju-1",
      number: "#1",
      name: "Jeju and You",
      instagram: "@jejuandyou_snap",
      subPhotographers: [
        {
          id: "jeju-1-1",
          number: "#1-1",
          name: "Main Director",
          instagram: "@jejuandyou_snap",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Main Director", instagram: "@jejuandyou_snap" },
                hmu: { name: "Dansum", instagram: "@dansum_makeup" },
                dress: { name: "Nervi", instagram: "@nervi____" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Mokhwasuban", instagram: "@mokhwasuban" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","4K Cinematic Drone Shooting (20-30 sec Landscape Video)"],
              inclusiveNotes: ["Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields.","Note: Drone videography is subject to weather conditions."],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Customer selected : 40\nDetailed retouch 25 + Color correction only 15",
              priceSNS: 4056000,
              priceNoSNS: 4186000,
              addons: [
                { name: "4K Videography", price: null, desc: "Discounted Price (With SNS Upload Consent): KRW 404,000 / Regular Price (No SNS Upload Consent): KRW 576,000. Includes 2-3 min 4K pre-wedding video + 30-40 sec Full HD vertical video. Original video footage: KRW 59,000." },
                { name: "Studio Photography Addition", price: 393000, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched photos. Additional interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Two(2) Photographer Option", price: 459000, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched photos." },
                { name: "Express Retouching Service", price: 115000, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 22000, desc: "Per photo, up to 5 photos." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Main Director", instagram: "@jejuandyou_snap" },
                hmu: { name: "Deibe", instagram: "@deibe_jeju" },
                dress: { name: "Deibe", instagram: "@deibe_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","4K Cinematic Drone Shooting (20-30 sec Landscape Video)"],
              inclusiveNotes: ["Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields.","Note: Drone videography is subject to weather conditions."],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Customer selected : 40\nDetailed retouch 25 + Color correction only 15",
              priceSNS: 4068000,
              priceNoSNS: 4198000,
              addons: [
                { name: "4K Videography", price: null, desc: "Discounted Price (With SNS Upload Consent): KRW 404,000 / Regular Price (No SNS Upload Consent): KRW 576,000. Includes 2-3 min 4K pre-wedding video + 30-40 sec Full HD vertical video. Original video footage: KRW 59,000." },
                { name: "Studio Photography Addition", price: 393000, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched photos. Additional interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Two(2) Photographer Option", price: 459000, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched photos." },
                { name: "Express Retouching Service", price: 115000, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 22000, desc: "Per photo, up to 5 photos." },
              ],
            },
            {
              name: "Package C",
              subtitle: "",
              partners: {
                photographer: { name: "Main Director", instagram: "@jejuandyou_snap" },
                hmu: { name: "Opus", instagram: "@opus_w" },
                dress: { name: "Ettera / Marshallbride", instagram: "@ettera_official / @marshallbride_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","4K Cinematic Drone Shooting (20-30 sec Landscape Video)"],
              inclusiveNotes: ["Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields.","Note: Drone videography is subject to weather conditions."],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Customer selected : 40\nDetailed retouch 25 + Color correction only 15",
              priceSNS: 4133000,
              priceNoSNS: 4263000,
              addons: [
                { name: "Opus Dress Upgrade (White/Black Label)", price: 293000, desc: "Basic Label: No extra charge. White/Black Label: KRW 293,000 per dress. Can be paid on-site by credit card." },
                { name: "4K Videography", price: null, desc: "Discounted Price (With SNS Upload Consent): KRW 404,000 / Regular Price (No SNS Upload Consent): KRW 576,000. Includes 2-3 min 4K pre-wedding video + 30-40 sec Full HD vertical video. Original video footage: KRW 59,000." },
                { name: "Studio Photography Addition", price: 393000, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched photos. Additional interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Two(2) Photographer Option", price: 459000, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched photos." },
                { name: "Express Retouching Service", price: 115000, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 22000, desc: "Per photo, up to 5 photos." },
              ],
            },
          ],
        },
        {
          id: "jeju-1-2",
          number: "#1-2",
          name: "Director Ura",
          instagram: "@jejuandyou_ura",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Jeju and You Ura", instagram: "@jejuandyou_ura" },
                hmu: { name: "Dansum", instagram: "@dansum_makeup" },
                dress: { name: "Nervi", instagram: "@nervi____" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Mokhwasuban", instagram: "@mokhwasuban" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","4K Cinematic Drone Shooting (20-30 sec Landscape Video)"],
              inclusiveNotes: ["Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields.","Note: Drone videography is subject to weather conditions."],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Customer selected : 40\nDetailed retouch 25 + Color correction only 15",
              priceSNS: 3666000,
              priceNoSNS: 3796000,
              addons: [
                { name: "4K Videography", price: null, desc: "Discounted Price (With SNS Upload Consent): KRW 404,000 / Regular Price (No SNS Upload Consent): KRW 576,000. Includes 2-3 min 4K pre-wedding video + 30-40 sec Full HD vertical video. Original video footage: KRW 59,000." },
                { name: "Studio Photography Addition", price: 393000, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched photos. Additional interpreter and transportation fees apply for time extension." },
                { name: "Two(2) Photographer Option", price: 459000, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched photos." },
                { name: "Express Retouching Service", price: 115000, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 22000, desc: "Per photo, up to 5 photos." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Jeju and You Ura", instagram: "@jejuandyou_ura" },
                hmu: { name: "Deibe", instagram: "@deibe_jeju" },
                dress: { name: "Deibe", instagram: "@deibe_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","4K Cinematic Drone Shooting (20-30 sec Landscape Video)"],
              inclusiveNotes: ["Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields.","Note: Drone videography is subject to weather conditions."],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Customer selected : 40\nDetailed retouch 25 + Color correction only 15",
              priceSNS: 3678000,
              priceNoSNS: 3808000,
              addons: [
                { name: "4K Videography", price: null, desc: "Discounted Price (With SNS Upload Consent): KRW 404,000 / Regular Price (No SNS Upload Consent): KRW 576,000. Includes 2-3 min 4K pre-wedding video + 30-40 sec Full HD vertical video. Original video footage: KRW 59,000." },
                { name: "Studio Photography Addition", price: 393000, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched photos. Additional interpreter and transportation fees apply for time extension." },
                { name: "Two(2) Photographer Option", price: 459000, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched photos." },
                { name: "Express Retouching Service", price: 115000, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 22000, desc: "Per photo, up to 5 photos." },
              ],
            },
            {
              name: "Package C",
              subtitle: "",
              partners: {
                photographer: { name: "Jeju and You Ura", instagram: "@jejuandyou_ura" },
                hmu: { name: "Opus", instagram: "@opus_w" },
                dress: { name: "Ettera / Marshallbride", instagram: "@ettera_official / @marshallbride_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","4K Cinematic Drone Shooting (20-30 sec Landscape Video)"],
              inclusiveNotes: ["Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields.","Note: Drone videography is subject to weather conditions."],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Customer selected : 40\nDetailed retouch 25 + Color correction only 15",
              priceSNS: 3743000,
              priceNoSNS: 3873000,
              addons: [
                { name: "Opus Dress Upgrade (White/Black Label)", price: 293000, desc: "Basic Label: No extra charge. White/Black Label: KRW 293,000 per dress. Can be paid on-site by credit card." },
                { name: "4K Videography", price: null, desc: "Discounted Price (With SNS Upload Consent): KRW 404,000 / Regular Price (No SNS Upload Consent): KRW 576,000. Includes 2-3 min 4K pre-wedding video + 30-40 sec Full HD vertical video. Original video footage: KRW 59,000." },
                { name: "Studio Photography Addition", price: 393000, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched photos. Additional interpreter and transportation fees apply for time extension." },
                { name: "Two(2) Photographer Option", price: 459000, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched photos." },
                { name: "Express Retouching Service", price: 115000, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 22000, desc: "Per photo, up to 5 photos." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "jeju-2",
      number: "#2",
      name: "Jeju Ohu",
      instagram: "@jejuohu_haru / @jejuohu_oneul / @ohujeju_owal",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Jeju Ohu (Randomly Assigned)", instagram: "@jejuohu_haru / @jejuohu_oneul / @ohujeju_owal" },
            hmu: { name: "OVE", instagram: "@ove.makeup" },
            dress: { name: "OVE", instagram: "@ove.makeup" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Heel","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 - 5 hours",
          locations: "4 sites",
          originalPhotos: "1,000+",
          retouched: 30,
          retouchedDetail: "Customer Selected: 30",
          priceSNS: 3406000,
          priceNoSNS: 3536000,
          addons: [
            { name: "4K Videography (Drone included)", price: 576000, desc: "Weather permitting. 2 min 4K pre-wedding video + 10 sec drone clip (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: Original video footage NOT provided." },
            { name: "Film Photography (Drone included)", price: 576000, desc: "Weather permitting. Includes color correction photos + 4K drone video approx. 20 sec (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: First 30 teams: FREE." },
            { name: "Two(2) Photographer Option", price: 576000, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched photos (Photographer Selected)." },
            { name: "Studio Photography Addition", price: null, desc: "2 hours of studio photography. Replaces one outdoor location. One outfit only (no outfit change). Additional guests: KRW 7,000/person/hour. Option 1: Ledio Studio (up to 6 ppl) KRW 129,000 (@ledio_studio). Option 2: Donghwaro5 Studio (up to 5 ppl) A-room KRW 129,000 / B-room KRW 129,000 / Entire KRW 203,000 (@donghwaro5). Option 3: Inourdays Studio (up to 4 ppl) Day KRW 129,000 / Night KRW 102,000 / Entire KRW 203,000 (@inourdays_studio)." },
            { name: "Additional Retouched Photo", price: 11000, desc: "Per photo. Maximum 10 photos available." },
            { name: "Additional Companion Shooting", price: 23000, desc: "Per photo. When adding 2 or more people." },
            { name: "Express Retouching Service", price: 115000, desc: "10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
            { name: "Premium Leather Album", price: null, desc: "20P: KRW 230,000 / 30P: KRW 253,000 / 40P: KRW 276,000. Size: 14x11 inch Album + Leather Pouch. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Jeju Ohu (Randomly Assigned)", instagram: "@jejuohu_haru / @jejuohu_oneul / @ohujeju_owal" },
            hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
            dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 - 5 hours",
          locations: "4 sites",
          originalPhotos: "1,000+",
          retouched: 30,
          retouchedDetail: "Customer Selected: 30",
          priceSNS: 3502000,
          priceNoSNS: 3632000,
          addons: [
            { name: "4K Videography (Drone included)", price: 576000, desc: "Weather permitting. 2 min 4K pre-wedding video + 10 sec drone clip (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: Original video footage NOT provided." },
            { name: "Film Photography (Drone included)", price: 576000, desc: "Weather permitting. Includes color correction photos + 4K drone video approx. 20 sec (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: First 30 teams: FREE." },
            { name: "Two(2) Photographer Option", price: 576000, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched photos (Photographer Selected)." },
            { name: "Studio Photography Addition", price: null, desc: "2 hours of studio photography. Replaces one outdoor location. One outfit only (no outfit change). Additional guests: KRW 7,000/person/hour. Option 1: Ledio Studio (up to 6 ppl) KRW 129,000 (@ledio_studio). Option 2: Donghwaro5 Studio (up to 5 ppl) A-room KRW 129,000 / B-room KRW 129,000 / Entire KRW 203,000 (@donghwaro5). Option 3: Inourdays Studio (up to 4 ppl) Day KRW 129,000 / Night KRW 102,000 / Entire KRW 203,000 (@inourdays_studio)." },
            { name: "Additional Retouched Photo", price: 11000, desc: "Per photo. Maximum 10 photos available." },
            { name: "Additional Companion Shooting", price: 23000, desc: "Per photo. When adding 2 or more people." },
            { name: "Express Retouching Service", price: 115000, desc: "10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
            { name: "Premium Leather Album", price: null, desc: "20P: KRW 230,000 / 30P: KRW 253,000 / 40P: KRW 276,000. Size: 14x11 inch Album + Leather Pouch. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
        {
          name: "Package C",
          subtitle: "",
          partners: {
            photographer: { name: "Jeju Ohu (Randomly Assigned)", instagram: "@jejuohu_haru / @jejuohu_oneul / @ohujeju_owal" },
            hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
            dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 - 5 hours",
          locations: "4 sites",
          originalPhotos: "1,000+",
          retouched: 30,
          retouchedDetail: "Customer Selected: 30",
          priceSNS: 3574000,
          priceNoSNS: 3704000,
          addons: [
            { name: "4K Videography (Drone included)", price: 576000, desc: "Weather permitting. 2 min 4K pre-wedding video + 10 sec drone clip (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: Original video footage NOT provided." },
            { name: "Film Photography (Drone included)", price: 576000, desc: "Weather permitting. Includes color correction photos + 4K drone video approx. 20 sec (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: First 30 teams: FREE." },
            { name: "Two(2) Photographer Option", price: 576000, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched photos (Photographer Selected)." },
            { name: "Studio Photography Addition", price: null, desc: "2 hours of studio photography. Replaces one outdoor location. One outfit only (no outfit change). Additional guests: KRW 7,000/person/hour. Option 1: Ledio Studio (up to 6 ppl) KRW 129,000 (@ledio_studio). Option 2: Donghwaro5 Studio (up to 5 ppl) A-room KRW 129,000 / B-room KRW 129,000 / Entire KRW 203,000 (@donghwaro5). Option 3: Inourdays Studio (up to 4 ppl) Day KRW 129,000 / Night KRW 102,000 / Entire KRW 203,000 (@inourdays_studio)." },
            { name: "Additional Retouched Photo", price: 11000, desc: "Per photo. Maximum 10 photos available." },
            { name: "Additional Companion Shooting", price: 23000, desc: "Per photo. When adding 2 or more people." },
            { name: "Express Retouching Service", price: 115000, desc: "10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
            { name: "Premium Leather Album", price: null, desc: "20P: KRW 230,000 / 30P: KRW 253,000 / 40P: KRW 276,000. Size: 14x11 inch Album + Leather Pouch. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
      ],
    },
    {
      id: "jeju-3",
      number: "#3",
      name: "Greemy Snap",
      instagram: "@greemysnap",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Greemy Snap", instagram: "@greemysnap" },
            hmu: { name: "K Salon(Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@k__salon" },
            suit: { name: "Hespoke Suit", instagram: "@hespokesuit_official" },
            bouquet: { name: "Loolloo Flower", instagram: "@loolloo_flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Cinematic Drone Footage (1 Clip, 30s-1m)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone videography is subject to weather conditions."],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 60,
          retouchedDetail: "Detailed retouch: 30 (each in 3 tones: Natural / Film / B&W) + Color correction only: 30",
          priceSNS: 3225000,
          priceNoSNS: 3342000,
          addons: [
            { name: "4K Videography (Drone included)", price: 459000, desc: "Approx. 3 min music video format (with BGM). Natural direction + emotional scene-focused. Cinematic & Candid feel. Drone shooting weather permitting." },
            { name: "Two(2) Photographer Option", price: 173000, desc: "Additional Photographer (@greemy_ellie). Two photographers working simultaneously for different perspectives. Additional 10 detailed retouched photos." },
            { name: "Studio Photography Addition", price: 345000, desc: "Includes Studio Rental. Additional shooting time approx. 1.5 hours. Additional stylist accompaniment, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Additional Shooting Time and Location", price: 230000, desc: "Add shooting time or an additional location. Additional stylist accompaniment fees apply for time extension." },
            { name: "Additional Retouching Service", price: null, desc: "Detailed retouching: KRW 7,000 per photo. Color correction: KRW 5,000 per photo." },
          ],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Greemy Snap", instagram: "@greemysnap" },
            hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
            dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Cinematic Drone Footage (1 Clip, 30s-1m)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone videography is subject to weather conditions."],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 60,
          retouchedDetail: "Detailed retouch: 30 (each in 3 tones: Natural / Film / B&W) + Color correction only: 30",
          priceSNS: 3457000,
          priceNoSNS: 3574000,
          addons: [
            { name: "4K Videography (Drone included)", price: 459000, desc: "Approx. 3 min music video format (with BGM). Natural direction + emotional scene-focused. Cinematic & Candid feel. Drone shooting weather permitting." },
            { name: "Two(2) Photographer Option", price: 173000, desc: "Additional Photographer (@greemy_ellie). Two photographers working simultaneously for different perspectives. Additional 10 detailed retouched photos." },
            { name: "Studio Photography Addition", price: 345000, desc: "Includes Studio Rental. Additional shooting time approx. 1.5 hours. Additional stylist accompaniment, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Additional Shooting Time and Location", price: 230000, desc: "Add shooting time or an additional location. Additional stylist accompaniment fees apply for time extension." },
            { name: "Additional Retouching Service", price: null, desc: "Detailed retouching: KRW 7,000 per photo. Color correction: KRW 5,000 per photo." },
          ],
        },
        {
          name: "Package C",
          subtitle: "",
          partners: {
            photographer: { name: "Greemy Snap", instagram: "@greemysnap" },
            hmu: { name: "Deibe", instagram: "@deibe_jeju" },
            dress: { name: "Deibe", instagram: "@deibe_jeju" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Cinematic Drone Footage (1 Clip, 30s-1m)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone videography is subject to weather conditions."],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 60,
          retouchedDetail: "Detailed retouch: 30 (each in 3 tones: Natural / Film / B&W) + Color correction only: 30",
          priceSNS: 3502000,
          priceNoSNS: 3619000,
          addons: [
            { name: "4K Videography (Drone included)", price: 459000, desc: "Approx. 3 min music video format (with BGM). Natural direction + emotional scene-focused. Cinematic & Candid feel. Drone shooting weather permitting." },
            { name: "Two(2) Photographer Option", price: 173000, desc: "Additional Photographer (@greemy_ellie). Two photographers working simultaneously for different perspectives. Additional 10 detailed retouched photos." },
            { name: "Studio Photography Addition", price: 345000, desc: "Includes Studio Rental. Additional shooting time approx. 1.5 hours. Additional stylist accompaniment, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Additional Shooting Time and Location", price: 230000, desc: "Add shooting time or an additional location. Additional stylist accompaniment fees apply for time extension." },
            { name: "Additional Retouching Service", price: null, desc: "Detailed retouching: KRW 7,000 per photo. Color correction: KRW 5,000 per photo." },
          ],
        },
        {
          name: "Package D",
          subtitle: "",
          partners: {
            photographer: { name: "Greemy Snap", instagram: "@greemysnap" },
            hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
            dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Cinematic Drone Footage (1 Clip, 30s-1m)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone videography is subject to weather conditions."],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 60,
          retouchedDetail: "Detailed retouch: 30 (each in 3 tones: Natural / Film / B&W) + Color correction only: 30",
          priceSNS: 3528000,
          priceNoSNS: 3645000,
          addons: [
            { name: "4K Videography (Drone included)", price: 459000, desc: "Approx. 3 min music video format (with BGM). Natural direction + emotional scene-focused. Cinematic & Candid feel. Drone shooting weather permitting." },
            { name: "Two(2) Photographer Option", price: 173000, desc: "Additional Photographer (@greemy_ellie). Two photographers working simultaneously for different perspectives. Additional 10 detailed retouched photos." },
            { name: "Studio Photography Addition", price: 345000, desc: "Includes Studio Rental. Additional shooting time approx. 1.5 hours. Additional stylist accompaniment, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Additional Shooting Time and Location", price: 230000, desc: "Add shooting time or an additional location. Additional stylist accompaniment fees apply for time extension." },
            { name: "Additional Retouching Service", price: null, desc: "Detailed retouching: KRW 7,000 per photo. Color correction: KRW 5,000 per photo." },
          ],
        },
      ],
    },
    {
      id: "jeju-4",
      number: "#4",
      name: "Rosemarry Snap",
      instagram: "@rosemarry_snap",
      subPhotographers: [
        {
          id: "jeju-4-1",
          number: "#4-1",
          name: "Photo Only",
          instagram: "@rosemarry_snap",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                hmu: { name: "K Salon(Why Brush)", instagram: "@why__brush" },
                dress: { name: "K Salon", instagram: "@k__salon" },
                suit: { name: "Hespoke Suit", instagram: "@hespokesuit_official" },
            bouquet: { name: "Park Your Bike", instagram: "@park.your.bike" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,000+",
              retouched: 25,
              retouchedDetail: "+Special Offer: 2 color tones (Natural / B&W)",
              priceSNS: 3284000,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 173000, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 173000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 115000, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: KRW 230,000. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 168000, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                hmu: { name: "Deibe", instagram: "@deibe_jeju" },
                dress: { name: "Deibe", instagram: "@deibe_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Park Your Bike", instagram: "@park.your.bike" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,000+",
              retouched: 25,
              retouchedDetail: "+Special Offer: 2 color tones (Natural / B&W)",
              priceSNS: 3515000,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 173000, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 173000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 115000, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: KRW 230,000. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 168000, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package C",
              subtitle: "",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
                dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Park Your Bike", instagram: "@park.your.bike" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,000+",
              retouched: 25,
              retouchedDetail: "+Special Offer: 2 color tones (Natural / B&W)",
              priceSNS: 3541000,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 173000, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 173000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 115000, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: KRW 230,000. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 168000, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package D",
              subtitle: "",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                hmu: { name: "Ettera", instagram: "@ettera__official" },
                dress: { name: "Ettera", instagram: "@ettera__official" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Park Your Bike", instagram: "@park.your.bike" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,000+",
              retouched: 25,
              retouchedDetail: "+Special Offer: 2 color tones (Natural / B&W)",
              priceSNS: 3684000,
              priceNoSNS: null,
              addons: [
                { name: "Ettera Dress Upgrade", price: 297000, desc: "Basic dresses: No extra charge. Upgrade line (non-basic): KRW 297,000 per dress. Can be paid on-site by credit card." },
                { name: "Film Photography", price: 173000, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 173000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 115000, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: KRW 230,000. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 168000, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
          ],
        },
        {
          id: "jeju-4-2",
          number: "#4-2",
          name: "Photo + Video",
          instagram: "@rosemarry_snap",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                videographer: { name: "Han Scene", instagram: "@han.scene" },
                hmu: { name: "K Salon(Why Brush)", instagram: "@why__brush" },
                dress: { name: "K Salon", instagram: "@k__salon" },
                suit: { name: "Hespoke Suit", instagram: "@hespokesuit_official" },
            bouquet: { name: "Park Your Bike", instagram: "@park.your.bike" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Pre-Wedding Video (3-5 min, landscape)","Interpreter (On Shoot Day)","4K Pre-Wedding Highlight Video (~1 min, landscape)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,000+",
              retouched: 25,
              retouchedDetail: "+Special Offer: 2 color tones (Natural / B&W)",
              priceSNS: 4220000,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 173000, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 173000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 115000, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: KRW 230,000. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 168000, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                videographer: { name: "Han Scene", instagram: "@han.scene" },
                hmu: { name: "Deibe", instagram: "@deibe_jeju" },
                dress: { name: "Deibe", instagram: "@deibe_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Park Your Bike", instagram: "@park.your.bike" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Pre-Wedding Video (3-5 min, landscape)","Interpreter (On Shoot Day)","4K Pre-Wedding Highlight Video (~1 min, landscape)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,000+",
              retouched: 25,
              retouchedDetail: "+Special Offer: 2 color tones (Natural / B&W)",
              priceSNS: 4451000,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 173000, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 173000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 115000, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: KRW 230,000. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 168000, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package C",
              subtitle: "",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                videographer: { name: "Han Scene", instagram: "@han.scene" },
                hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
                dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Park Your Bike", instagram: "@park.your.bike" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Pre-Wedding Video (3-5 min, landscape)","Interpreter (On Shoot Day)","4K Pre-Wedding Highlight Video (~1 min, landscape)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,000+",
              retouched: 25,
              retouchedDetail: "+Special Offer: 2 color tones (Natural / B&W)",
              priceSNS: 4477000,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 173000, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 173000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 115000, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: KRW 230,000. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 168000, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package D",
              subtitle: "",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                videographer: { name: "Han Scene", instagram: "@han.scene" },
                hmu: { name: "Ettera", instagram: "@ettera__official" },
                dress: { name: "Ettera", instagram: "@ettera__official" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Park Your Bike", instagram: "@park.your.bike" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Pre-Wedding Video (3-5 min, landscape)","Interpreter (On Shoot Day)","4K Pre-Wedding Highlight Video (~1 min, landscape)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,000+",
              retouched: 25,
              retouchedDetail: "+Special Offer: 2 color tones (Natural / B&W)",
              priceSNS: 4620000,
              priceNoSNS: null,
              addons: [
                { name: "Ettera Dress Upgrade", price: 297000, desc: "Basic dresses: No extra charge. Upgrade line (non-basic): KRW 297,000 per dress. Can be paid on-site by credit card." },
                { name: "Film Photography", price: 173000, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 173000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 115000, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: KRW 230,000. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 168000, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "jeju-5",
      number: "#5",
      name: "Indigo Bridge",
      instagram: "@indigo_bridge_snap",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Indigo Bridge", instagram: "@indigo_bridge_snap" },
            hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
            dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
            suit: { name: "Fotton Garment", instagram: "@fotton.jeju" },
            bouquet: { name: "Jeju You 1", instagram: "@jeju_you1" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Cinematic Drone Shooting (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone videography is subject to weather conditions."],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 20,
          retouchedDetail: "Customer Selected: 20 (Retouched + Color Correction)",
          priceSNS: 3508000,
          priceNoSNS: 3566000,
          addons: [
            { name: "Pre-Wedding 4K Cinematic Drone Shooting", price: 230000, desc: "Weather permitting. 1-2 min landscape video (Full HD or 4K). Logo positioned at bottom. Original drone footage: KRW 64,000." },
            { name: "Studio Photography Addition", price: 323000, desc: "Studio Rental fee NOT included. 1 hr session before outdoor shooting. Additional 5 detailed retouched photos. Additional stylist, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Camping Concept Photography", price: 173000, desc: "Setup using photographer's personal equipment. Approx. 15 min additional time (tent setup not possible). Can only proceed in forest. Weather permitting." },
            { name: "Express Retouching Service", price: null, desc: "Photos: KRW 13,000/photo (min 1, max 20). Completed within 2 weeks from photo selection date. Drone Video: KRW 56,000 (completed 1-2 weeks before wedding)." },
            { name: "Additional Retouched or Color Correction", price: null, desc: "Detailed Retouched: KRW 13,000/photo (no limit, includes retouched + color correction). Color Correction only: KRW 7,000/photo (min 5 photos, 5-7 days processing)." },
            { name: "Additional Shooting Time and Location", price: 253000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply. Available upon booking." },
            { name: "Premium Leather Album", price: null, desc: "20P: KRW 185,000 / 25P: KRW 196,000 / 30P: KRW 231,000. Size: 15x12 inch Album + Leather Pouch. Additional pages: KRW 6,000/page. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Indigo Bridge", instagram: "@indigo_bridge_snap" },
            hmu: { name: "Dansum", instagram: "@dansum_makeup" },
            dress: { name: "Nervi", instagram: "@nervi____" },
            suit: { name: "Atle Jeju", instagram: "@atlejeju_tuxedo" },
            bouquet: { name: "Mokhwasuban", instagram: "@mokhwasuban" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Cinematic Drone Shooting (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone videography is subject to weather conditions."],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 20,
          retouchedDetail: "Customer Selected: 20 (Retouched + Color Correction)",
          priceSNS: 3445000,
          priceNoSNS: 3504000,
          addons: [
            { name: "Dress Line Upgrade", price: null, desc: "Additional charges apply depending on the dress line at Nervi." },
            { name: "Pre-Wedding 4K Cinematic Drone Shooting", price: 230000, desc: "Weather permitting. 1-2 min landscape video (Full HD or 4K). Logo positioned at bottom. Original drone footage: KRW 64,000." },
            { name: "Studio Photography Addition", price: 323000, desc: "Studio Rental fee NOT included. 1 hr session before outdoor shooting. Additional 5 detailed retouched photos. Additional stylist, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Camping Concept Photography", price: 173000, desc: "Setup using photographer's personal equipment. Approx. 15 min additional time (tent setup not possible). Can only proceed in forest. Weather permitting." },
            { name: "Express Retouching Service", price: null, desc: "Photos: KRW 13,000/photo (min 1, max 20). Completed within 2 weeks from photo selection date. Drone Video: KRW 56,000 (completed 1-2 weeks before wedding)." },
            { name: "Additional Retouched or Color Correction", price: null, desc: "Detailed Retouched: KRW 13,000/photo (no limit, includes retouched + color correction). Color Correction only: KRW 7,000/photo (min 5 photos, 5-7 days processing)." },
            { name: "Additional Shooting Time and Location", price: 253000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply. Available upon booking." },
            { name: "Premium Leather Album", price: null, desc: "20P: KRW 185,000 / 25P: KRW 196,000 / 30P: KRW 231,000. Size: 15x12 inch Album + Leather Pouch. Additional pages: KRW 6,000/page. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
        {
          name: "Package C",
          subtitle: "",
          partners: {
            photographer: { name: "Indigo Bridge", instagram: "@indigo_bridge_snap" },
            hmu: { name: "Ettera", instagram: "@ettera__official" },
            dress: { name: "Ettera", instagram: "@ettera__official" },
            suit: { name: "Fotton Garment", instagram: "@fotton.jeju" },
            bouquet: { name: "Blooming Alice", instagram: "@blooming_alice_wedding" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Cinematic Drone Shooting (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone videography is subject to weather conditions."],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 20,
          retouchedDetail: "Customer Selected: 20 (Retouched + Color Correction)",
          priceSNS: 3718000,
          priceNoSNS: 3777000,
          addons: [
            { name: "Ettera Dress Upgrade", price: 297000, desc: "Basic dresses: No extra charge. Upgrade line (non-basic): KRW 297,000 per dress. Can be paid on-site by credit card." },
            { name: "Pre-Wedding 4K Cinematic Drone Shooting", price: 230000, desc: "Weather permitting. 1-2 min landscape video (Full HD or 4K). Logo positioned at bottom. Original drone footage: KRW 64,000." },
            { name: "Studio Photography Addition", price: 323000, desc: "Studio Rental fee NOT included. 1 hr session before outdoor shooting. Additional 5 detailed retouched photos. Additional stylist, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Camping Concept Photography", price: 173000, desc: "Setup using photographer's personal equipment. Approx. 15 min additional time (tent setup not possible). Can only proceed in forest. Weather permitting." },
            { name: "Express Retouching Service", price: null, desc: "Photos: KRW 13,000/photo (min 1, max 20). Completed within 2 weeks from photo selection date. Drone Video: KRW 56,000 (completed 1-2 weeks before wedding)." },
            { name: "Additional Retouched or Color Correction", price: null, desc: "Detailed Retouched: KRW 13,000/photo (no limit, includes retouched + color correction). Color Correction only: KRW 7,000/photo (min 5 photos, 5-7 days processing)." },
            { name: "Additional Shooting Time and Location", price: 253000, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply. Available upon booking." },
            { name: "Premium Leather Album", price: null, desc: "20P: KRW 185,000 / 25P: KRW 196,000 / 30P: KRW 231,000. Size: 15x12 inch Album + Leather Pouch. Additional pages: KRW 6,000/page. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
      ],
    },
    {
      id: "jeju-6",
      number: "#6",
      name: "About Mood Jeju",
      instagram: "@_aboutmood",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "About Mood Jeju", instagram: "@_aboutmood" },
            hmu: { name: "Bridal Hwang", instagram: "@jeju.bridalhwang_official" },
            dress: { name: "Bridal Hwang", instagram: "@jeju.bridalhwang_official" },
            suit: { name: "The Beautiful Bespoke", instagram: "@beautiful_bespoke_jeju" },
            bouquet: { name: "so.so.flower", instagram: "@so.so.flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 30,
          retouchedDetail: "Customer Selected: 25 + Photographer Selected: 5",
          priceSNS: 3392000,
          priceNoSNS: 3522000,
          addons: [
            { name: "Videography - Younangman", price: 794000, desc: "Female videographer (@you__nangman). 4K cinematic highlight film (approx. 3 min). No time limit on filming, accompanies entire photoshoot. 10-15 sec vertical SNS reel video included." },
            { name: "Videography - Cine Mouve", price: 690000, desc: "Videographer (@cine_mauve). Main cinematic video (approx. 3 min). 4K highlight video 20-30 sec. Drone footage subject to weather and airspace regulations. Accompanies entire photoshoot." },
            { name: "Studio Photography Addition", price: null, desc: "Studio: flat301studio (@flat301studio.kr). Includes rental for 2 hours. KRW 133,000: Replaces one outdoor location. KRW 311,000: Added to all 3 outdoor locations (includes 2 hrs stylist + car + interpreter). Inclusive props: faux cake, artificial bouquets, wine glasses, tableware, Bluetooth speaker, hair tools." },
            { name: "Express Retouching Service", price: 173000, desc: "Completed within 2 weeks from photo selection date. One (1) re-edit available." },
            { name: "Additional Retouched Photo", price: 13000, desc: "Per photo." },
          ],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "About Mood Jeju", instagram: "@_aboutmood" },
            hmu: { name: "Deibe", instagram: "@deibe_jeju" },
            dress: { name: "Deibe", instagram: "@deibe_jeju" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 30,
          retouchedDetail: "Customer Selected: 25 + Photographer Selected: 5",
          priceSNS: 3678000,
          priceNoSNS: 3808000,
          addons: [
            { name: "Videography - Younangman", price: 794000, desc: "Female videographer (@you__nangman). 4K cinematic highlight film (approx. 3 min). No time limit on filming, accompanies entire photoshoot. 10-15 sec vertical SNS reel video included." },
            { name: "Videography - Cine Mouve", price: 690000, desc: "Videographer (@cine_mauve). Main cinematic video (approx. 3 min). 4K highlight video 20-30 sec. Drone footage subject to weather and airspace regulations. Accompanies entire photoshoot." },
            { name: "Studio Photography Addition", price: null, desc: "Studio: flat301studio (@flat301studio.kr). Includes rental for 2 hours. KRW 133,000: Replaces one outdoor location. KRW 311,000: Added to all 3 outdoor locations (includes 2 hrs stylist + car + interpreter). Inclusive props: faux cake, artificial bouquets, wine glasses, tableware, Bluetooth speaker, hair tools." },
            { name: "Express Retouching Service", price: 173000, desc: "Completed within 2 weeks from photo selection date. One (1) re-edit available." },
            { name: "Additional Retouched Photo", price: 13000, desc: "Per photo." },
          ],
        },
        {
          name: "Package C",
          subtitle: "",
          partners: {
            photographer: { name: "About Mood Jeju", instagram: "@_aboutmood" },
            hmu: { name: "Audrey Tailor", instagram: "@audreytailor_jejuwedding" },
            dress: { name: "Audrey Tailor", instagram: "@audreytailor_jejuwedding" },
            suit: { name: "Audrey Tailor", instagram: "@audreytailor_jejuwedding" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 30,
          retouchedDetail: "Customer Selected: 25 + Photographer Selected: 5",
          priceSNS: 3666000,
          priceNoSNS: 3796000,
          addons: [
            { name: "Videography - Younangman", price: 794000, desc: "Female videographer (@you__nangman). 4K cinematic highlight film (approx. 3 min). No time limit on filming, accompanies entire photoshoot. 10-15 sec vertical SNS reel video included." },
            { name: "Videography - Cine Mouve", price: 690000, desc: "Videographer (@cine_mauve). Main cinematic video (approx. 3 min). 4K highlight video 20-30 sec. Drone footage subject to weather and airspace regulations. Accompanies entire photoshoot." },
            { name: "Studio Photography Addition", price: null, desc: "Studio: flat301studio (@flat301studio.kr). Includes rental for 2 hours. KRW 133,000: Replaces one outdoor location. KRW 311,000: Added to all 3 outdoor locations (includes 2 hrs stylist + car + interpreter). Inclusive props: faux cake, artificial bouquets, wine glasses, tableware, Bluetooth speaker, hair tools." },
            { name: "Express Retouching Service", price: 173000, desc: "Completed within 2 weeks from photo selection date. One (1) re-edit available." },
            { name: "Additional Retouched Photo", price: 13000, desc: "Per photo." },
          ],
        },
        {
          name: "Package D",
          subtitle: "",
          partners: {
            photographer: { name: "About Mood Jeju", instagram: "@_aboutmood" },
            hmu: { name: "Ettera", instagram: "@ettera__official" },
            dress: { name: "Ettera", instagram: "@ettera__official" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 30,
          retouchedDetail: "Customer Selected: 25 + Photographer Selected: 5",
          priceSNS: 3835000,
          priceNoSNS: 3965000,
          addons: [
            { name: "Ettera Dress Upgrade", price: 297000, desc: "Basic dresses: No extra charge. Upgrade line (non-basic): KRW 297,000 per dress. Can be paid on-site by credit card." },
            { name: "Videography - Younangman", price: 794000, desc: "Female videographer (@you__nangman). 4K cinematic highlight film (approx. 3 min). No time limit on filming, accompanies entire photoshoot. 10-15 sec vertical SNS reel video included." },
            { name: "Videography - Cine Mouve", price: 690000, desc: "Videographer (@cine_mauve). Main cinematic video (approx. 3 min). 4K highlight video 20-30 sec. Drone footage subject to weather and airspace regulations. Accompanies entire photoshoot." },
            { name: "Studio Photography Addition", price: null, desc: "Studio: flat301studio (@flat301studio.kr). Includes rental for 2 hours. KRW 133,000: Replaces one outdoor location. KRW 311,000: Added to all 3 outdoor locations (includes 2 hrs stylist + car + interpreter). Inclusive props: faux cake, artificial bouquets, wine glasses, tableware, Bluetooth speaker, hair tools." },
            { name: "Express Retouching Service", price: 173000, desc: "Completed within 2 weeks from photo selection date. One (1) re-edit available." },
            { name: "Additional Retouched Photo", price: 13000, desc: "Per photo." },
          ],
        },
      ],
    },
    {
      id: "jeju-7",
      number: "#7",
      name: "Shutterpresso",
      instagram: "@shutterpresso_official",
      subPhotographers: [
        {
          id: "jeju-7-1",
          number: "#7-1",
          name: "Main Director",
          instagram: "@sungjoo_son",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Main Director", instagram: "@sungjoo_son" },
                hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
                dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Drone Photography (Upon Client Request Only)","Drone Videography (Approx. 40-sec Edited Video in Landscape Format)","Pre-Wedding Highlight Video (Approx. 1 min, Landscape Format)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone photography and videography are subject to weather conditions."],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,000+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 4672000, priceNoSNS: 4802000,
              addons: [
                { name: "Two(2) Photographer Option", price: 345000, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videography", price: 576000, desc: "Original video footage + professionally edited pre-wedding video (3-4 min) + portrait highlight video for SNS (1 min). Note: When adding videography, the basic 1-min highlight video is upgraded to 3-4 min." },
                { name: "Studio Photography Addition", price: 323000, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 115000, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
                { name: "Express Retouching Service", price: 115000, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 288000, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Main Director", instagram: "@sungjoo_son" },
                hmu: { name: "By Moon", instagram: "@by_moon_artist_moon" },
                dress: { name: "By Moon", instagram: "@by_moon_dress" },
                suit: { name: "Browntail Suit", instagram: "@browntail_jeju_suit" },
            bouquet: { name: "La Vie en Rose Jeju", instagram: "@la_vie_en_rose_jeju" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 White Heel (KR 44~77, Heel 220~255cm)","2 Suits (Shirt and Shoes NOT included, Top 95~120 / Bottom 28~39in)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Drone Photography (Upon Client Request Only)","Drone Videography (Approx. 40-sec Edited Video in Landscape Format)","Pre-Wedding Highlight Video (Approx. 1 min, Landscape Format)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone photography and videography are subject to weather conditions."],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,000+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 4655000, priceNoSNS: 4785000,
              addons: [
                { name: "Two(2) Photographer Option", price: 345000, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videography", price: 576000, desc: "Original video footage + professionally edited pre-wedding video (3-4 min) + portrait highlight video for SNS (1 min). Note: When adding videography, the basic 1-min highlight video is upgraded to 3-4 min." },
                { name: "Studio Photography Addition", price: 323000, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 115000, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
                { name: "Express Retouching Service", price: 115000, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 288000, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package C",
              subtitle: "",
              partners: {
                photographer: { name: "Main Director", instagram: "@sungjoo_son" },
                hmu: { name: "Command U", instagram: "@commandu_jeju" },
                dress: { name: "Command U", instagram: "@commandu_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Drone Photography (Upon Client Request Only)","Drone Videography (Approx. 40-sec Edited Video in Landscape Format)","Pre-Wedding Highlight Video (Approx. 1 min, Landscape Format)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone photography and videography are subject to weather conditions."],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,000+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 4729000, priceNoSNS: 4859000,
              addons: [
                { name: "Two(2) Photographer Option", price: 345000, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videography", price: 576000, desc: "Original video footage + professionally edited pre-wedding video (3-4 min) + portrait highlight video for SNS (1 min). Note: When adding videography, the basic 1-min highlight video is upgraded to 3-4 min." },
                { name: "Studio Photography Addition", price: 323000, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 115000, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
                { name: "Express Retouching Service", price: 115000, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 288000, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
          ],
        },
        {
          id: "jeju-7-2",
          number: "#7-2",
          name: "Max & Grey & Jeffery",
          instagram: "@max_moumzip / @_greytic / @ryu.jeffery",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Randomly Assigned (Max/Grey/Jeffery)", instagram: "@max_moumzip / @_greytic / @ryu.jeffery" },
                hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
                dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Drone Photography (Upon Client Request Only)","Drone Videography (Approx. 40-sec Edited Video in Landscape Format)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone photography and videography are subject to weather conditions."],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,000+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 3892000, priceNoSNS: 4022000,
              addons: [
                { name: "Two(2) Photographer Option", price: 345000, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videography", price: 576000, desc: "Original video footage + professionally edited pre-wedding video (3-4 min) + portrait highlight video for SNS (1 min)." },
                { name: "Studio Photography Addition", price: 323000, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 115000, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
                { name: "Express Retouching Service", price: 115000, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 288000, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Randomly Assigned (Max/Grey/Jeffery)", instagram: "@max_moumzip / @_greytic / @ryu.jeffery" },
                hmu: { name: "By Moon", instagram: "@by_moon_artist_moon" },
                dress: { name: "By Moon", instagram: "@by_moon_dress" },
                suit: { name: "Browntail Suit", instagram: "@browntail_jeju_suit" },
            bouquet: { name: "La Vie en Rose Jeju", instagram: "@la_vie_en_rose_jeju" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 White Heel (KR 44~77, Heel 220~255cm)","2 Suits (Shirt and Shoes NOT included, Top 95~120 / Bottom 28~39in)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Drone Photography (Upon Client Request Only)","Drone Videography (Approx. 40-sec Edited Video in Landscape Format)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone photography and videography are subject to weather conditions."],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,000+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 3875000, priceNoSNS: 4005000,
              addons: [
                { name: "Two(2) Photographer Option", price: 345000, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videography", price: 576000, desc: "Original video footage + professionally edited pre-wedding video (3-4 min) + portrait highlight video for SNS (1 min)." },
                { name: "Studio Photography Addition", price: 323000, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 115000, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
                { name: "Express Retouching Service", price: 115000, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 288000, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package C",
              subtitle: "",
              partners: {
                photographer: { name: "Randomly Assigned (Max/Grey/Jeffery)", instagram: "@max_moumzip / @_greytic / @ryu.jeffery" },
                hmu: { name: "Command U", instagram: "@commandu_jeju" },
                dress: { name: "Command U", instagram: "@commandu_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Drone Photography (Upon Client Request Only)","Drone Videography (Approx. 40-sec Edited Video in Landscape Format)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone photography and videography are subject to weather conditions."],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,000+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 3949000, priceNoSNS: 4079000,
              addons: [
                { name: "Two(2) Photographer Option", price: 345000, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videography", price: 576000, desc: "Original video footage + professionally edited pre-wedding video (3-4 min) + portrait highlight video for SNS (1 min)." },
                { name: "Studio Photography Addition", price: 323000, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 115000, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
                { name: "Express Retouching Service", price: 115000, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 288000, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
          ],
        },
        {
          id: "jeju-7-3",
          number: "#7-3",
          name: "Leo & Joel",
          instagram: "@shutterpresso_leo / @joel.jk__",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Randomly Assigned (Leo/Joel)", instagram: "@shutterpresso_leo / @joel.jk__" },
                hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
                dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Drone Photography (Upon Client Request Only)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone photography and videography are subject to weather conditions."],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,000+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 3762000, priceNoSNS: 3892000,
              addons: [
                { name: "Two(2) Photographer Option", price: 345000, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videography", price: 576000, desc: "Original video footage + professionally edited pre-wedding video (3-4 min) + portrait highlight video for SNS (1 min)." },
                { name: "Studio Photography Addition", price: 323000, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 115000, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
                { name: "Express Retouching Service", price: 115000, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 288000, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Randomly Assigned (Leo/Joel)", instagram: "@shutterpresso_leo / @joel.jk__" },
                hmu: { name: "By Moon", instagram: "@by_moon_artist_moon" },
                dress: { name: "By Moon", instagram: "@by_moon_dress" },
                suit: { name: "Browntail Suit", instagram: "@browntail_jeju_suit" },
            bouquet: { name: "La Vie en Rose Jeju", instagram: "@la_vie_en_rose_jeju" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 White Heel (KR 44~77, Heel 220~255cm)","2 Suits (Shirt and Shoes NOT included, Top 95~120 / Bottom 28~39in)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Drone Photography (Upon Client Request Only)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone photography and videography are subject to weather conditions."],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,000+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 3392000, priceNoSNS: 3522000,
              addons: [
                { name: "Two(2) Photographer Option", price: 345000, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videography", price: 576000, desc: "Original video footage + professionally edited pre-wedding video (3-4 min) + portrait highlight video for SNS (1 min)." },
                { name: "Studio Photography Addition", price: 323000, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 115000, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
                { name: "Express Retouching Service", price: 115000, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 288000, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package C",
              subtitle: "",
              partners: {
                photographer: { name: "Randomly Assigned (Leo/Joel)", instagram: "@shutterpresso_leo / @joel.jk__" },
                hmu: { name: "Command U", instagram: "@commandu_jeju" },
                dress: { name: "Command U", instagram: "@commandu_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Drone Photography (Upon Client Request Only)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)","Note: Drone photography and videography are subject to weather conditions."],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,000+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 3819000, priceNoSNS: 3949000,
              addons: [
                { name: "Two(2) Photographer Option", price: 345000, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videography", price: 576000, desc: "Original video footage + professionally edited pre-wedding video (3-4 min) + portrait highlight video for SNS (1 min)." },
                { name: "Studio Photography Addition", price: 323000, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 115000, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
                { name: "Express Retouching Service", price: 115000, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 288000, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "jeju-8",
      number: "#8",
      name: "Jeju AJ Snap",
      instagram: "@jeju_aj_snap",
      packages: [
        {
          name: "Package",
          subtitle: "",
          partners: {
            photographer: { name: "Jeju AJ Snap", instagram: "@jeju_aj_snap" },
            hmu: { name: "Bridal Hwang", instagram: "@jeju.bridalhwang_official" },
            dress: { name: "Bridal Hwang", instagram: "@jeju.bridalhwang_official" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included, Basic Label)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Studio Session (1 Studio + 2 Outdoor or 3 Outdoor, +5 retouched)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 25,
          retouchedDetail: "Outdoor: 20 + Studio: 5 (Customer Selected)",
          priceSNS: 3613000,
          priceNoSNS: 3743000,
          addons: [
            { name: "Bridal Hwang Dress Upgrade (Premium Label)", price: null, desc: "Basic Label: No extra charge. Premium Label: Additional KRW 345,000 to KRW 4,023,000 per dress. Pay on-site or to Hype Wedding after fitting." },
            { name: "4K Videography", price: null, desc: "Weather permitting. Price TBD based on client selection. Choose 1 of 3 videographers: @_harufilm_jeju / @studio.cachito / @oou.rin. Delivered via email." },
            { name: "Premium Leather Album", price: 345000, desc: "30 Pages. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
      ],
    },
    {
      id: "jeju-9",
      number: "#9",
      name: "Yeongrami",
      instagram: "@yeongrami_snap",
      subPhotographers: [
        {
          id: "jeju-9-1",
          number: "#9-1",
          name: "Main Director",
          instagram: "@yeongrami_snap",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Main Director", instagram: "@yeongrami_snap" },
                hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
                dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "1,000+",
              retouched: 30,
              retouchedDetail: "Customer Selected: 30",
              priceSNS: 3964000,
              priceNoSNS: 4224000,
              addons: [
                { name: "Additional Retouched Photo", price: 115000, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 345000, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 photos. Detailed retouched: 10 photos." },
                { name: "Videography (Spinoff)", price: 689000, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage KRW 117,000 / Portrait SNS highlight KRW 59,000." },
                { name: "Premium Leather Album", price: 173000, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Main Director", instagram: "@yeongrami_snap" },
                hmu: { name: "OVE", instagram: "@ove.makeup" },
                dress: { name: "OVE", instagram: "@ove.makeup" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Heel","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "1,000+",
              retouched: 30,
              retouchedDetail: "Customer Selected: 30",
              priceSNS: 4068000,
              priceNoSNS: 4328000,
              addons: [
                { name: "Additional Retouched Photo", price: 115000, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 345000, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 photos. Detailed retouched: 10 photos." },
                { name: "Videography (Spinoff)", price: 689000, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage KRW 117,000 / Portrait SNS highlight KRW 59,000." },
                { name: "Premium Leather Album", price: 173000, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
            {
              name: "Package C",
              subtitle: "",
              partners: {
                photographer: { name: "Main Director", instagram: "@yeongrami_snap" },
                hmu: { name: "Ettera", instagram: "@ettera__official" },
                dress: { name: "Ettera", instagram: "@ettera__official" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "1,000+",
              retouched: 30,
              retouchedDetail: "Customer Selected: 30",
              priceSNS: 4107000,
              priceNoSNS: 4367000,
              addons: [
                { name: "Ettera Dress Upgrade", price: 297000, desc: "Basic dresses: No extra charge. Upgrade line (non-basic): KRW 297,000 per dress. Can be paid on-site by credit card." },
                { name: "Additional Retouched Photo", price: 115000, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 345000, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 photos. Detailed retouched: 10 photos." },
                { name: "Videography (Spinoff)", price: 689000, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage KRW 117,000 / Portrait SNS highlight KRW 59,000." },
                { name: "Premium Leather Album", price: 173000, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
          ],
        },
        {
          id: "jeju-9-2",
          number: "#9-2",
          name: "Director Danii",
          instagram: "@yeongrami_danii",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Director Danii", instagram: "@yeongrami_danii" },
                hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
                dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 sites",
              originalPhotos: "1,000+",
              retouched: 30,
              retouchedDetail: "Customer Selected: 30",
              priceSNS: 3639000,
              priceNoSNS: 3899000,
              addons: [
                { name: "Additional Retouched Photo", price: 115000, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 345000, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 photos. Detailed retouched: 10 photos." },
                { name: "Videography (Spinoff)", price: 689000, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage KRW 117,000 / Portrait SNS highlight KRW 59,000." },
                { name: "Premium Leather Album", price: 173000, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Director Danii", instagram: "@yeongrami_danii" },
                hmu: { name: "OVE", instagram: "@ove.makeup" },
                dress: { name: "OVE", instagram: "@ove.makeup" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Heel","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 sites",
              originalPhotos: "1,000+",
              retouched: 30,
              retouchedDetail: "Customer Selected: 30",
              priceSNS: 3743000,
              priceNoSNS: 4003000,
              addons: [
                { name: "Additional Retouched Photo", price: 115000, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 345000, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 photos. Detailed retouched: 10 photos." },
                { name: "Videography (Spinoff)", price: 689000, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage KRW 117,000 / Portrait SNS highlight KRW 59,000." },
                { name: "Premium Leather Album", price: 173000, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
            {
              name: "Package C",
              subtitle: "",
              partners: {
                photographer: { name: "Director Danii", instagram: "@yeongrami_danii" },
                hmu: { name: "Ettera", instagram: "@ettera__official" },
                dress: { name: "Ettera", instagram: "@ettera__official" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 sites",
              originalPhotos: "1,000+",
              retouched: 30,
              retouchedDetail: "Customer Selected: 30",
              priceSNS: 3782000,
              priceNoSNS: 4042000,
              addons: [
                { name: "Ettera Dress Upgrade", price: 297000, desc: "Basic dresses: No extra charge. Upgrade line (non-basic): KRW 297,000 per dress. Can be paid on-site by credit card." },
                { name: "Additional Retouched Photo", price: 115000, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 345000, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 photos. Detailed retouched: 10 photos." },
                { name: "Videography (Spinoff)", price: 689000, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage KRW 117,000 / Portrait SNS highlight KRW 59,000." },
                { name: "Premium Leather Album", price: 173000, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "jeju-10",
      number: "#10",
      name: "Jeju Fairytale",
      instagram: "@jeju_fairytale",
      subPhotographers: [
        {
          id: "jeju-10-1",
          number: "#10-1",
          name: "Simple Premium",
          instagram: "@jeju_fairytale",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "K Salon(Why Brush)", instagram: "@why__brush" },
                dress: { name: "K Salon", instagram: "@k__salon" },
                suit: { name: "Hespoke Suit", instagram: "@hespokesuit_official" },
                bouquet: { name: "Loolloo Flower", instagram: "@loolloo_flower" },
              },
              inclusiveItems: ["Outdoor Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites (outdoor)",
              originalPhotos: "1,000+",
              retouched: 20,
              retouchedDetail: "",
              priceSNS: 3039000,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 11000, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                dress: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Outdoor Photography Session","Hair & Makeup for Bride and Groom","2 Dresses (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 outdoor venues",
              originalPhotos: "1,000+",
              retouched: 20,
              retouchedDetail: "Customer Selected: 20",
              priceSNS: 3556000,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 11000, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
          ],
        },
        {
          id: "jeju-10-2",
          number: "#10-2",
          name: "All Day Fairytale",
          instagram: "@jeju_fairytale",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "K Salon(Why Brush)", instagram: "@why__brush" },
                dress: { name: "K Salon", instagram: "@k__salon" },
                suit: { name: "Hespoke Suit", instagram: "@hespokesuit_official" },
                bouquet: { name: "Loolloo Flower", instagram: "@loolloo_flower" },
              },
              inclusiveItems: ["Outdoor Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 sites (outdoor)",
              originalPhotos: "1,000+",
              retouched: 30,
              retouchedDetail: "",
              priceSNS: 3325000,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 11000, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                dress: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Outdoor Photography Session","Hair & Makeup for Bride and Groom","3 Dress (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 outdoor venues",
              originalPhotos: "1,000+",
              retouched: 30,
              retouchedDetail: "Customer Selected: 30",
              priceSNS: 4128000,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 11000, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
          ],
        },
        {
          id: "jeju-10-3",
          number: "#10-3",
          name: "All Day Studio",
          instagram: "@jeju_fairytale",
          packages: [
            {
              name: "Package A",
              subtitle: "",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "K Salon(Why Brush)", instagram: "@why__brush" },
                dress: { name: "K Salon", instagram: "@k__salon" },
                suit: { name: "Hespoke Suit", instagram: "@hespokesuit_official" },
                bouquet: { name: "Loolloo Flower", instagram: "@loolloo_flower" },
              },
              inclusiveItems: ["Outdoor + Studio Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "6 hours",
              locations: "4 sites (1 indoor + 3 outdoor)",
              originalPhotos: "1,000+",
              retouched: 35,
              retouchedDetail: "",
              priceSNS: 3754000,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 11000, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
            {
              name: "Package B",
              subtitle: "",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                dress: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Outdoor + Studio Photography Session","Hair & Makeup for Bride and Groom","4 Dress (Shoes NOT included)","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "6 hours",
              locations: "1 Studio + 3 Outdoor",
              originalPhotos: "1,000+",
              retouched: 35,
              retouchedDetail: "Customer Selected: 35",
              priceSNS: 4843000,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 11000, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
          ],
        },
      ],
    },
  ],
  seoul: [
{
      id: "seoul-1", number: "#1", name: "Misang Snap", instagram: "@__misang_seoul",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Misang Snap", instagram: "@__misang_seoul" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session (2 Photographers)","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","4K Videography (2:30 behind-the-scenes video, Original + Final)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours", locations: "2 sites (1 Outdoor + 1 Indoor)", originalPhotos: "1,000+", retouched: 25,
          retouchedDetail: "Customer Selected: 25",
          priceSNS: 3612000, priceNoSNS: 3755000,
          addons: [
            { name: "Night Photography", price: 173000, desc: "Location: Dongjak Bridge (Han River, Seoul). 1 hour additional. 5 additional retouched photos. Additional stylist/interpreter/transport fees apply." },
            { name: "Studio Photography Addition", price: null, desc: "Price varies by studio; booked after consultation." },
          ],
        },
      ],
    },
{
      id: "seoul-2", number: "#2", name: "About Mood Seoul", instagram: "@_aboutmood",
      packages: [
        {
          name: "Package",
          subtitle: "",
          partners: {
            photographer: { name: "About Mood Seoul", instagram: "@_aboutmood" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours", locations: "2-3 sites (1-2 Outdoor + 1 Indoor, or 2-3 Outdoor only)", originalPhotos: "1,000+", retouched: 30,
          retouchedDetail: "Customer Selected: 23 + Photographer Selected: 7",
          priceSNS: 3925000, priceNoSNS: 4055000,
          addons: [
            { name: "4K Videography (Younangman)", price: 887000, desc: "4K cinematic highlight film approx. 3 min. No time limit, accompanies entire photoshoot. Portrait SNS video: KRW 56,000 (30 sec). Original footage: KRW 56,000 (20 min). Express Retouching: KRW 168,000." },
            { name: "Studio Photography Addition", price: null, desc: "Studio rental fee charged separately. Studio list provided upon request. Additional stylist/interpreter/transport fees apply." },
          ],
        },
      ],
    },
{
      id: "seoul-3", number: "#3", name: "De.riz", instagram: "@de.riz_",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "De.riz", instagram: "@de.riz_" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","1 Dress + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "3 hours", locations: "2 sites", originalPhotos: "500+", retouched: 20,
          retouchedDetail: "Customer Selected: 20. Up to 2 outfits.",
          priceSNS: 2712000, priceNoSNS: 2790000,
          addons: [
            { name: "Additional 1-Hour", price: 135000, desc: "Additional stylist/interpreter/transport fees apply." },
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 253000, desc: "Per dress." },
            { name: "Additional Suit", price: 115000, desc: "Per suit." },
          ],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "De.riz", instagram: "@de.riz_" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours", locations: "3 sites", originalPhotos: "1,000+", retouched: 30,
          retouchedDetail: "Customer Selected: 30. Up to 3 outfits.",
          priceSNS: 3678000, priceNoSNS: 3782000,
          addons: [
            { name: "Additional 1-Hour", price: 135000, desc: "Additional stylist/interpreter/transport fees apply." },
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 253000, desc: "Per dress." },
            { name: "Additional Suit", price: 115000, desc: "Per suit." },
          ],
        },
      ],
    },
    {
      id: "seoul-4", number: "#4", name: "Novus", instagram: "@novus.moment",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Novus", instagram: "@novus.moment" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            bouquet: { name: "OYF", instagram: "@owolyeoleumflower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","1 Dress + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "3 hours", locations: "2 sites (Outdoor only)", originalPhotos: "700+", retouched: 8,
          retouchedDetail: "Up to 2 outfits.\nSNS consent: +5 retouched photos (13 total)",
          priceSNS: 2710000, priceNoSNS: null,
          addons: [],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Novus", instagram: "@novus.moment" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            bouquet: { name: "OYF", instagram: "@owolyeoleumflower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "6 hours", locations: "3 sites", originalPhotos: "1,000+", retouched: 25,
          retouchedDetail: "Up to 3 outfits.\nSNS consent: +5 retouched photos (30 total)",
          priceSNS: 3267000, priceNoSNS: null,
          addons: [],
        },
      ],
    },
    {
      id: "seoul-5", number: "#5", name: "Muhwagwa Wedding", instagram: "@muhwagwa_wedding",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Muhwagwa", instagram: "@muhwagwa_wedding" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session (1 Photographer)","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 hours", locations: "1 Indoor Studio + 1 Outdoor Site (Noeul Park)", originalPhotos: "All Original", retouched: 20,
          retouchedDetail: "Customer Selected: 20",
          priceSNS: 3633000, priceNoSNS: null,
          addons: [
            { name: "Additional Shooting Time", price: null, desc: "Night shooting (after sunset): KRW 115,000 per 30 min. Daytime shooting (before sunset): KRW 81,000 per 30 min." },
            { name: "Express Retouching Service", price: 169000, desc: "10 photos delivered within 10 days from photo selection date." },
            { name: "Premium Compact Album", price: 442000, desc: "22 pages included. Samples available on Instagram (@muhwagwa_wedding) Highlights. Shipping costs are billed separately after delivery." },
          ],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Muhwagwa", instagram: "@muhwagwa_wedding" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography & Videography Session (2 Photographers)","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Approx. 2 Min Video","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 hours", locations: "1 Indoor Studio + 1 Outdoor Site (Noeul Park)", originalPhotos: "All Original", retouched: 25,
          retouchedDetail: "Customer Selected: 25",
          priceSNS: 4101000, priceNoSNS: null,
          addons: [
            { name: "Additional Shooting Time", price: null, desc: "Night shooting (after sunset): KRW 115,000 per 30 min. Daytime shooting (before sunset): KRW 81,000 per 30 min." },
            { name: "Express Retouching Service", price: 169000, desc: "10 photos delivered within 10 days from photo selection date." },
            { name: "Premium Compact Album", price: 442000, desc: "22 pages included. Samples available on Instagram (@muhwagwa_wedding) Highlights. Shipping costs are billed separately after delivery." },
          ],
        },
      ],
    },
{
      id: "seoul-6", number: "#6", name: "Seol in Seoul", instagram: "@seolinseoul_",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          
          partners: {
            photographer: { name: "Seol in Seoul", instagram: "@seolinseoul_" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","1 Dress + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "3 hours", locations: "2 sites (Daytime+Sunset or Sunset+Night)", originalPhotos: "500+", retouched: 30,
          retouchedDetail: "Customer Selected: 30. Up to 2 outfits.",
          priceSNS: 2725000, priceNoSNS: null,
          addons: [
            { name: "4K Videography (Younangman)", price: 887000, desc: "4K cinematic highlight film approx. 3 min. No time limit, accompanies entire photoshoot. Portrait SNS video: KRW 56,000. Original footage: KRW 56,000. Express Retouching: KRW 168,000." },
            { name: "Film Photography", price: 113000, desc: "35mm film. Up to 30 original photos. Kodak/Fuji options. Inclusive Printing & Scanning." },
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 253000, desc: "Per dress." },
            { name: "Additional Suit", price: 115000, desc: "Per suit." },
            { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
            { name: "Express Retouching Service", price: 113000, desc: "Completed within 2 weeks from photo selection date." },
          ],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Seol in Seoul", instagram: "@seolinseoul_" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours", locations: "3 sites (Day+Sunset+Night)", originalPhotos: "1,000+", retouched: 45,
          retouchedDetail: "Customer Selected: 45. Up to 3 outfits.",
          priceSNS: 3678000, priceNoSNS: null,
          addons: [
            { name: "4K Videography - Younangman", price: 887000, desc: "4K cinematic highlight film approx. 3 min. No time limit, accompanies entire photoshoot. Portrait SNS video: KRW 56,000. Original footage: KRW 56,000. Express Retouching: KRW 168,000." },
            { name: "4K Videography - Ownorbit", price: 898000, desc: "4K cinematic highlight film approx. 2 min. Accompanies entire photoshoot. Portrait SNS video approx. 20 sec. Original footage included. Drone videography (weather permitting). Express Retouching: KRW 113,000." },
            { name: "Film Photography", price: 113000, desc: "35mm film. Up to 30 original photos. Kodak/Fuji options. Inclusive Printing & Scanning." },
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 253000, desc: "Per dress." },
            { name: "Additional Suit", price: 115000, desc: "Per suit." },
            { name: "Additional Retouched Photo", price: 11000, desc: "Per photo." },
            { name: "Express Retouching Service", price: 113000, desc: "Completed within 2 weeks from photo selection date." },
          ],
        },
      ],
    },
    {
      id: "seoul-7", number: "#7", name: "Youin Seoul", instagram: "@youin.seoul",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Youin Seoul", instagram: "@youin.seoul" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","1 Dress + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "3 hours", locations: "2 sites", originalPhotos: "1,000+", retouched: 20,
          retouchedDetail: "Up to 2 outfits.",
          priceSNS: 2948000, priceNoSNS: null,
          addons: [],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Youin Seoul", instagram: "@youin.seoul" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours", locations: "3 sites", originalPhotos: "1,000+", retouched: 30,
          retouchedDetail: "Up to 3 outfits.",
          priceSNS: 3821000, priceNoSNS: null,
          addons: [],
        },
      ],
    },
    {
      id: "seoul-8", number: "#8", name: "Nakwon", instagram: "@nakwon.snap",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Nakwon", instagram: "@nakwon.snap" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            bouquet: { name: "OYF", instagram: "@owolyeoleumflower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours", locations: "2 sites", originalPhotos: "1,000", retouched: 20,
          retouchedDetail: "",
          priceSNS: 3417000, priceNoSNS: 3476000,
          addons: [],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Nakwon", instagram: "@nakwon.snap" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon Seoul", instagram: "@ksalon_seoul" },
            bouquet: { name: "OYF", instagram: "@owolyeoleumflower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "6 hours", locations: "3 sites", originalPhotos: "2,000", retouched: 30,
          retouchedDetail: "Up to 4 outfits.",
          priceSNS: 4006000, priceNoSNS: 4064000,
          addons: [],
        },
      ],
    },
    {
      id: "seoul-9", number: "#9", name: "Eo.ways", instagram: "@eo.ways",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Eo.ways", instagram: "@eo.ways" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "Uyoung", instagram: "@uy.oung" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","1 Dress + 1 Pair of Heels","1 Suit (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "3 hours", locations: "2 sites", originalPhotos: "200+", retouched: 30,
          retouchedDetail: "Customer Selected: 30",
          priceSNS: 2393000, priceNoSNS: null,
          addons: [],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Eo.ways", instagram: "@eo.ways" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "Uyoung", instagram: "@uy.oung" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4-5 hours", locations: "3 sites", originalPhotos: "1,000+", retouched: 40,
          retouchedDetail: "Customer Selected: 40",
          priceSNS: 3330000, priceNoSNS: null,
          addons: [],
        },
      ],
    },
    {
      id: "seoul-10", number: "#10", name: "Kiss and Smoking", instagram: "@kiss_and.smoking",
      packages: [
        {
          name: "Package A",
          subtitle: "",
          partners: {
            photographer: { name: "Kiss and Smoking", instagram: "@kiss_and.smoking" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "Uyoung", instagram: "@uy.oung" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours", locations: "2 sites", originalPhotos: "500+", retouched: 10,
          retouchedDetail: "Customer Selected: 10. Up to 2 outfits.",
          priceSNS: 3067000, priceNoSNS: null,
          addons: [
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 253000, desc: "Per dress." },
            { name: "Additional Suit", price: 115000, desc: "Per suit." },
            { name: "On-site Hair Stylist", price: 338000, desc: "Live hair changes during the shoot using professional hot tools and accessories." },
          ],
        },
        {
          name: "Package B",
          subtitle: "",
          partners: {
            photographer: { name: "Kiss and Smoking", instagram: "@kiss_and.smoking" },
            hmu: { name: "K Salon Seoul (Why Brush)", instagram: "@why__brush" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "Uyoung", instagram: "@uy.oung" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dresses + 1 Pair of Heels","2 Suits (Shirt and Shoes NOT included)","Accessories (Veil, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet + 1 Boutonniere","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "7 hours", locations: "3 sites", originalPhotos: "1,000+", retouched: 20,
          retouchedDetail: "Customer Selected: 20. Up to 3 outfits.",
          priceSNS: 3821000, priceNoSNS: null,
          addons: [
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 253000, desc: "Per dress." },
            { name: "Additional Suit", price: 115000, desc: "Per suit." },
            { name: "On-site Hair Stylist", price: 338000, desc: "Live hair changes during the shoot using professional hot tools and accessories." },
          ],
        },
      ],
    },
  ],
};

function InstagramLink({ handle }) {
  if (!handle) return null;
  const handles = handle.split(" / ");
  return (
    <span>
      {handles.map((h, i) => (
        <span key={h}>
          <a
            href={`https://instagram.com/${h.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1E5045", textDecoration: "none", borderBottom: "1px solid #5E9485" }}
          >
            {h}
          </a>
          {i < handles.length - 1 && " / "}
        </span>
      ))}
    </span>
  );
}

function RenderDesc({ text }) {
  if (!text) return null;
  const parts = text.split(/(@[\w._]+)/g);
  return parts.map((part, i) =>
    part.startsWith("@") ? (
      <a key={i} href={`https://instagram.com/${part.replace("@", "")}`} target="_blank" rel="noopener noreferrer" style={{ color: "#1E5045", textDecoration: "none", borderBottom: "1px solid #5E9485" }}>{part}</a>
    ) : <span key={i}>{part}</span>
  );
}

function BackButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        color: "#1E5045",
        cursor: "pointer",
        fontSize: "14px",
        padding: "4px 0",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "'Pretendard', -apple-system, sans-serif",
      }}
    >
      <span style={{ fontSize: "18px" }}>&#8249;</span> {label}
    </button>
  );
}

function ListButton({ onClick, disabled, left, right }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        background: !disabled ? "#fff" : "#fafafa",
        border: "1px solid #5E9485",
        borderRadius: "4px",
        cursor: !disabled ? "pointer" : "default",
        opacity: !disabled ? 1 : 0.5,
        transition: "all 0.2s",
        textAlign: "left",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = "#1E5045";
          e.currentTarget.style.boxShadow = "0 2px 12px rgba(139,115,85,0.08)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#5E9485";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div>{left}</div>
      <div>{right}</div>
    </button>
  );
}

function RegionSelect({ onSelect }) {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "60px" }}>
      <p style={{ color: "#666", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
        Select Location
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { key: "jeju", label: "Jeju", sub: "10 Photographers" },
          { key: "seoul", label: "Seoul", sub: "10 Photographers" },
        ].map((r) => (
          <button
            key={r.key}
            onClick={() => onSelect(r.key)}
            style={{
              width: "160px",
              padding: "24px 20px",
              background: "#fff",
              border: "1px solid #5E9485",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#1E5045";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(139,115,85,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#5E9485";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: 300, color: "#111111", fontFamily: "'Pretendard', -apple-system, sans-serif" }}>{r.label}</div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "8px", letterSpacing: "1px" }}>{r.sub}</div>
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}

function PhotographerList({ region, photographers, onSelect, onBack }) {
  return (
    <div>
      <BackButton onClick={onBack} label="Back" />
      <p style={{ color: "#666", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", margin: "12px 0 16px", textAlign: "center" }}>
        {region === "jeju" ? "Jeju" : "Seoul"} Photographers
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "480px", margin: "0 auto" }}>
        {photographers.map((p) => {
          const hasSubs = p.subPhotographers && p.subPhotographers.length > 0;
          const hasPackages = p.packages && p.packages.length > 0;
          const available = hasSubs || hasPackages;
          return (
            <ListButton
              key={p.id}
              onClick={() => available && onSelect(p)}
              disabled={!available}
              left={
                <>
                  <span style={{ color: "#555555", fontSize: "12px", fontWeight: 400 }}>{p.number}</span>
                  <span style={{ color: "#111111", fontSize: "16px", marginLeft: "12px", fontFamily: "'Pretendard', -apple-system, sans-serif", fontWeight: 400 }}>
                    {p.name}
                  </span>
                </>
              }
              right={
                available ? (
                  <span style={{ color: "#555555", fontSize: "12px" }}>
                    {hasSubs ? `${p.subPhotographers.length} directors ›` : `${p.packages.length} packages ›`}
                  </span>
                ) : (
                  <span style={{ color: "#999", fontSize: "12px" }}>Coming Soon</span>
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
}

function SubPhotographerList({ photographer, onSelect, onBack }) {
  return (
    <div>
      <BackButton onClick={onBack} label="Back" />
      <div style={{ textAlign: "center", margin: "12px 0 16px" }}>
        <h2 style={{ fontFamily: "'Pretendard', -apple-system, sans-serif", fontWeight: 400, fontSize: "22px", color: "#111111", margin: 0 }}>
          {photographer.name}
        </h2>
      </div>
      <p style={{ color: "#666", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px", textAlign: "center" }}>
        Select Director
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "480px", margin: "0 auto" }}>
        {photographer.subPhotographers.map((sub) => (
          <ListButton
            key={sub.id}
            onClick={() => onSelect(sub)}
            disabled={false}
            left={
              <>
                <span style={{ color: "#555555", fontSize: "12px", fontWeight: 400 }}>{sub.number}</span>
                <span style={{ color: "#111111", fontSize: "16px", marginLeft: "12px", fontFamily: "'Pretendard', -apple-system, sans-serif", fontWeight: 400 }}>
                  {sub.name}
                </span>
              </>
            }
            right={
              <span style={{ color: "#555555", fontSize: "12px" }}>{sub.packages.length} packages ›</span>
            }
          />
        ))}
      </div>
    </div>
  );
}

function PackageDetail({ photographer, parentName, onBack, backLabel }) {
  const [selectedPkg, setSelectedPkg] = useState(0);
  const [expandedAddon, setExpandedAddon] = useState(null);
  const currentPackages = photographer.packages;
  const pkg = currentPackages[selectedPkg];
  const displayName = parentName ? `${parentName} (${photographer.name})` : photographer.name;

  return (
    <div>
      <BackButton onClick={onBack} label="Back" />

      <div style={{ textAlign: "center", margin: "12px 0 16px" }}>
        <h2 style={{ fontFamily: "'Pretendard', -apple-system, sans-serif", fontWeight: 400, fontSize: "22px", color: "#111111", margin: 0 }}>
          {displayName}
        </h2>
      </div>

      {/* Package tabs */}
      <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
        {currentPackages.map((p, i) => (
          <button
            key={p.name}
            onClick={() => { setSelectedPkg(i); setExpandedAddon(null); }}
            style={{
              padding: "10px 20px",
              background: i === selectedPkg ? "#1E5045" : "#fff",
              color: i === selectedPkg ? "#fff" : "#1E5045",
              border: "1px solid #1E5045",
              borderRadius: "2px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.5px",
              transition: "all 0.2s",
            }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Package subtitle */}
      {pkg.subtitle && (
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <p style={{ fontSize: "14px", color: "#1E5045", fontWeight: 500, margin: 0, letterSpacing: "0.5px" }}>{pkg.subtitle}</p>
        </div>
      )}

      {/* Partners */}
      <div style={{ background: "rgba(30, 80, 69, 0.06)", border: "1px solid #5E9485", borderRadius: "4px", padding: "20px 24px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Partners</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {Object.entries(pkg.partners).map(([role, info]) => (
            <div key={role}>
              <span style={{ fontSize: "12px", color: "#666", textTransform: "capitalize" }}>{role === "hmu" ? "Hair & Makeup" : role === "dress" ? "Dress" : role === "suit" ? "Suit" : role === "videographer" ? "Videographer" : role === "bouquet" ? "Bouquet" : "Photographer"}</span>
              <div style={{ fontSize: "14px", color: "#111111", fontWeight: 500, marginTop: "2px" }}>{info.name}</div>
              <InstagramLink handle={info.instagram} />
            </div>
          ))}
        </div>
        <p style={{ fontSize: "14px", color: "#555555", fontWeight: 500, margin: "12px 0 0" }}>
          * Please check each studio's portfolio on Instagram
        </p>
      </div>

      {/* Package Inclusive */}
      <div style={{ marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Package Inclusive</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "6px" }}>
          {pkg.inclusiveItems.filter(item => !item.startsWith("Note:")).map((item) => (
            <div key={item} style={{ fontSize: "14px", color: "#111111", padding: "6px 0", display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <span style={{ color: "#555555", flexShrink: 0 }}>✓</span>
              {item}
            </div>
          ))}
        </div>
        {pkg.inclusiveItems.filter(item => item.startsWith("Note:")).map((note) => (
          <p key={note} style={{ fontSize: "12px", color: "#555", fontStyle: "italic", margin: "12px 0 0", padding: "8px 12px", borderLeft: "2px solid #5E9485" }}>
            {note}
          </p>
        ))}
        {pkg.inclusiveNotes && pkg.inclusiveNotes.map((note) => (
          <p key={note} style={{ fontSize: "12px", color: "#555", fontStyle: "italic", margin: "12px 0 0", padding: "8px 12px", borderLeft: "2px solid #5E9485" }}>
            {note}
          </p>
        ))}
      </div>

      {/* Photography Details */}
      <div style={{ background: "rgba(30, 80, 69, 0.06)", border: "1px solid #5E9485", borderRadius: "4px", padding: "20px 24px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px" }}>Photography Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
          {[
            { label: "Shooting Time", value: pkg.shootingTime },
            { label: "Locations", value: pkg.locations },
            { label: "Original Photos", value: `${pkg.originalPhotos} photos` },
          ].map((d) => (
            <div key={d.label}>
              <div style={{ fontSize: "12px", color: "#666" }}>{d.label}</div>
              <div style={{ fontSize: "16px", fontWeight: 400, color: "#111111", marginTop: "2px", fontFamily: "'Pretendard', -apple-system, sans-serif" }}>{d.value}</div>
            </div>
          ))}
          <div>
            <div style={{ fontSize: "12px", color: "#666" }}>Retouched Photos</div>
            <div style={{ fontSize: "16px", fontWeight: 400, color: "#111111", marginTop: "2px", fontFamily: "'Pretendard', -apple-system, sans-serif" }}>{pkg.retouched} photos</div>
            <div style={{ fontSize: "12px", color: "#888", marginTop: "4px", lineHeight: "1.5", whiteSpace: "pre-line" }}>{pkg.retouchedDetail}</div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      {pkg.priceSNS === null ? (
        <div style={{ background: "#1E5045", borderRadius: "4px", padding: "16px", textAlign: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "1px", textTransform: "uppercase" }}>Package Price</div>
          <div style={{ fontSize: "16px", fontWeight: 400, color: "#fff", marginTop: "6px", fontFamily: "'Pretendard', -apple-system, sans-serif" }}>
            Please contact us for pricing
          </div>
        </div>
      ) : pkg.priceNoSNS !== null ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
          <div style={{ background: "#1E5045", borderRadius: "4px", padding: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "1px", textTransform: "uppercase" }}><span style={{ fontSize: "14px", fontWeight: 700 }}>Discounted Price</span><br/>(With SNS Upload Consent)</div>
            <div style={{ fontSize: "16px", fontWeight: 400, color: "#fff", marginTop: "6px", fontFamily: "'Pretendard', -apple-system, sans-serif" }}>
              KRW {pkg.priceSNS.toLocaleString()}
            </div>
          </div>
          <div style={{ background: "rgba(30, 80, 69, 0.06)", border: "1px solid #5E9485", borderRadius: "4px", padding: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "#666", letterSpacing: "1px", textTransform: "uppercase" }}><span style={{ fontSize: "14px", fontWeight: 700 }}>Regular Price</span><br/>(No SNS Upload Consent)</div>
            <div style={{ fontSize: "16px", fontWeight: 400, color: "#111111", marginTop: "6px", fontFamily: "'Pretendard', -apple-system, sans-serif" }}>
              KRW {pkg.priceNoSNS.toLocaleString()}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: "#1E5045", borderRadius: "4px", padding: "16px", textAlign: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "1px", textTransform: "uppercase" }}>Package Price</div>
          <div style={{ fontSize: "16px", fontWeight: 400, color: "#fff", marginTop: "6px", fontFamily: "'Pretendard', -apple-system, sans-serif" }}>
            KRW {pkg.priceSNS.toLocaleString()}
          </div>
        </div>
      )}
      <p style={{ fontSize: "12px", color: "#666", margin: "-12px 0 8px 4px" }}>
        * All prices are in Korean Won (KRW) and do NOT include add-ons.
      </p>
      {pkg.priceSNS !== null && pkg.priceNoSNS !== null && (
        <p style={{ fontSize: "12px", color: "#666", margin: "0 0 24px 4px" }}>
          * SNS Upload: Hype Pig (Hype Wedding, Hype Snap) SNS, Photographer SNS
        </p>
      )}

      {/* Add-ons */}
      {pkg.addons.length > 0 && (
      <div style={{ marginBottom: "32px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Add-ons</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {pkg.addons.map((addon, i) => (
            <div
              key={addon.name}
              style={{ border: "1px solid #5E9485", borderRadius: "4px", overflow: "hidden" }}
            >
              <button
                onClick={() => setExpandedAddon(expandedAddon === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  background: expandedAddon === i ? "#fafafa" : "#fff",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: "14px", color: "#111111" }}>{addon.name}</span>
                <span style={{ fontSize: "14px", color: "#555555", fontWeight: 500, flexShrink: 0, marginLeft: "12px" }}>
                  {addon.price !== null ? `+₩${addon.price.toLocaleString()}` : "See details"} {expandedAddon === i ? "−" : "+"}
                </span>
              </button>
              {expandedAddon === i && (
                <div style={{ padding: "0 16px 12px", fontSize: "13px", color: "#555", lineHeight: "1.6", background: "rgba(30, 80, 69, 0.06)" }}>
                  <RenderDesc text={addon.desc} />
                </div>
              )}
            </div>
          ))}
        </div>
        <p style={{ fontSize: "12px", color: "#666", margin: "8px 0 0 4px", fontStyle: "italic" }}>
          * Add-ons are NOT included in the total price. Additional charges will apply.
        </p>
      </div>
      )}

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "32px 0", borderTop: "1px solid #5E9485" }}>
        <p style={{ fontSize: "14px", color: "#555", margin: "0 0 16px" }}>Ready to book or have questions?</p>
        <a
          href="https://wa.me/821062695990"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 40px",
            background: "#1E5045",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "2px",
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: 500,
          }}
        >
          CONTACT US ON WHATSAPP
        </a>
        <p style={{ fontSize: "12px", color: "#666", marginTop: "12px" }}>
          Instagram:{" "}
          <a href="https://instagram.com/hypewedd_ing" target="_blank" rel="noopener noreferrer" style={{ color: "#555555", textDecoration: "none" }}>
            @hypewedd_ing
          </a>
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [region, setRegion] = useState(null);
  const [photographer, setPhotographer] = useState(null);
  const [subPhotographer, setSubPhotographer] = useState(null);

  const handlePhotographerSelect = (p) => {
    setPhotographer(p);
    if (!p.subPhotographers || p.subPhotographers.length === 0) {
      setSubPhotographer(p);
    }
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (subPhotographer) {
      if (photographer.subPhotographers) {
        setSubPhotographer(null);
      } else {
        setSubPhotographer(null);
        setPhotographer(null);
      }
    } else if (photographer) {
      setPhotographer(null);
    } else if (region) {
      setRegion(null);
    }
    window.scrollTo(0, 0);
  };

  // Determine which view to show
  const showRegion = !region;
  const showList = region !== null && !photographer;
  const showSubs = photographer !== null && photographer.subPhotographers && !subPhotographer;
  const showPackages = subPhotographer !== null;

  return (
    <div style={{
      fontFamily: "'Pretendard', -apple-system, sans-serif",
      maxWidth: "640px",
      margin: "0 auto",
      padding: "24px 20px",
      color: "#111111",
      minHeight: "100vh",
      background: "#fff",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <h1 style={{
          fontFamily: "'Pretendard', -apple-system, sans-serif",
          fontSize: "20px",
          fontWeight: 300,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#111111",
          margin: 0,
        }}>
          Hype Wedding
        </h1>
        <div style={{ width: "40px", height: "1px", background: "#dddddd", margin: "12px auto" }} />
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
          Package & Rate
        </p>
        <div style={{ display: "inline-block", marginTop: "12px", padding: "5px 14px", border: "1px solid #1a1a1a", borderRadius: "999px", fontSize: "11px", letterSpacing: "1.5px", color: "#1a1a1a", fontWeight: 500 }}>
          KRW (₩) PRICE LIST
        </div>
      </div>

      {/* Content */}
      {showRegion && <RegionSelect onSelect={setRegion} />}
      {showList && (
        <PhotographerList
          region={region}
          photographers={PHOTOGRAPHERS[region]}
          onSelect={handlePhotographerSelect}
          onBack={() => setRegion(null)}
        />
      )}
      {showSubs && (
        <SubPhotographerList
          photographer={photographer}
          onSelect={(s) => { setSubPhotographer(s); window.scrollTo(0, 0); }}
          onBack={() => setPhotographer(null)}
        />
      )}
      {showPackages && (
        <PackageDetail
          photographer={subPhotographer}
          parentName={photographer.subPhotographers ? photographer.name : null}
          onBack={handleBack}
          backLabel={photographer.subPhotographers ? photographer.name : "Photographers"}
        />
      )}

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "40px 0 16px", borderTop: "1px solid #5E9485", marginTop: "40px" }}>
        <p style={{ fontSize: "12px", color: "#888", letterSpacing: "1px", margin: 0 }}>
          © 2026 Hype Pig Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
