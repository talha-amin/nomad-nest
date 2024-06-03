import React, { useState } from "react";
import styled from "styled-components";
import karachi from "../assets/Jinnah.png";
import lahore from "../assets/minar.png";
import islamabad from "../assets/faisal.png";
import skardu from "../assets/skardu.png";
import swat from "../assets/swat.png";
import Button from "./Button";
import Modal from "./Modal";

const itineraries = {
Islamabad: `
    <h3>Day 1: Cultural and Natural Highlights</h3>
    <h4>Morning</h4>
    <p>
      <strong>1. Faisal Mosque</strong><br />
      • 9:00 AM - 11:00 AM<br />
      • Start your day with a visit to the iconic Faisal Mosque, one of the largest mosques in the world. Marvel at its unique modern architecture, set against the backdrop of the Margalla Hills. Take your time to explore the mosque’s serene surroundings and appreciate the tranquility of this spiritual site.
    </p>
    <h4>Midday</h4>
    <p>
      <strong>2. Daman-e-Koh</strong><br />
      • 11:30 AM - 1:00 PM<br />
      • Head to Daman-e-Koh, a viewpoint in the Margalla Hills offering panoramic views of Islamabad. It’s a great spot for taking photos and enjoying the natural beauty of the area.
    </p>
    <h4>Afternoon</h4>
    <p>
      <strong>3. Pakistan Monument and Museum</strong><br />
      • 1:30 PM - 3:30 PM<br />
      • Visit the Pakistan Monument, a national symbol representing the four provinces of Pakistan. The adjacent museum provides insightful exhibits on the country’s history and heritage. Spend time exploring both the monument and the museum.
    </p>
    <h4>Evening</h4>
    <p>
      <strong>4. Lok Virsa Museum</strong><br />
      • 4:00 PM - 6:00 PM<br />
      • Explore the Lok Virsa Museum, which showcases the diverse cultural heritage of Pakistan. The museum features traditional arts, crafts, and cultural artifacts from various regions of the country.
    </p>
    <h3>Day 2: Scenic and Recreational Spots</h3>
    <h4>Morning</h4>
    <p>
      <strong>1. Rawal Lake</strong><br />
      • 9:00 AM - 11:00 AM<br />
      • Start your day with a visit to Rawal Lake, a picturesque spot perfect for boating, picnicking, and enjoying nature. The lake is surrounded by lush greenery and offers beautiful views of the Margalla Hills.
    </p>
    <h4>Midday</h4>
    <p>
      <strong>2. Shakarparian Hills</strong><br />
      • 11:30 AM - 1:00 PM<br />
      • Visit Shakarparian Hills, another scenic viewpoint offering panoramic views of Islamabad and Rawalpindi. The area is also home to the famous Pakistan Monument and the Garden Avenue.
    </p>
    <h4>Afternoon</h4>
    <p>
      <strong>3. Saidpur Village</strong><br />
      • 1:30 PM - 3:30 PM<br />
      • Head to Saidpur Village, a historic village turned cultural heritage site. Explore the traditional architecture, visit the art galleries, and enjoy the charming ambiance of this cultural hub.
    </p>
    <h4>Evening</h4>
    <p>
      <strong>4. Monal Restaurant</strong><br />
      • 4:00 PM - 7:00 PM<br />
      • End your day with an early dinner at Monal Restaurant, located in the Margalla Hills. Enjoy a delicious meal while taking in breathtaking views of Islamabad from above. The restaurant is known for its excellent food and stunning vistas, making it a perfect way to conclude your trip.
    </p>
  `,
Karachi: `
  <h3>Two-Day Itinerary</h3>
  <h4>Day 1: Beaches and Coastal Attractions</h4>
  <h5>Morning</h5>
  <p>
    <strong>1. Hawksbay Beach</strong><br />
    • Head to Hawksbay Beach, known for its golden sands and clear waters. This beach is ideal for swimming, picnicking, and spotting green sea turtles during the nesting season.
  </p>
  <h5>Afternoon</h5>
  <p>
    <strong>2. Sandspit Beach</strong><br />
    • Visit Sandspit Beach, located adjacent to Hawksbay. It’s famous for its calm waters and is a great spot for sunbathing and shell collecting.
  </p>
  <h5>Evening</h5>
  <p>
    <strong>3. Karachi Marina Club</strong><br />
    • End your day with a relaxing visit to the Karachi Marina Club, where you can enjoy boating, yachting, and a beautiful sunset view over the Arabian Sea.
  </p>
  
  <h4>Day 2: Cultural and Historical Sites</h4>
  <h5>Midday</h5>
  <p>
    <strong>1. Pakistan Maritime Museum</strong><br />
    • Explore the Pakistan Maritime Museum, which offers a fascinating insight into the maritime history and heritage of Pakistan, with exhibits including submarines and naval equipment.
  </p>
  <h5>Afternoon</h5>
  <p>
    <strong>2. Mohatta Palace</strong><br />
    • Visit Mohatta Palace, a stunning heritage museum that showcases the cultural and artistic history of Karachi. The palace itself is an architectural marvel.
  </p>
  <h5>Evening</h5>
  <p>
    <strong>3. Port Grand</strong><br />
    • Conclude your day at Port Grand, a waterfront complex with a variety of dining, shopping, and entertainment options. Enjoy a dinner with a view of the harbor.
  </p>

  <h3>Three-Day Itinerary</h3>
  <h4>Day 3: Nature and Wildlife</h4>
  <h5>Morning</h5>
  <p>
    <strong>1. Karachi Zoo</strong><br />
    • Start your day at Karachi Zoo, one of the oldest zoos in Pakistan, home to a wide variety of animals and birds.
  </p>
  <h5>Midday</h5>
  <p>
    <strong>2. Churna Island</strong><br />
    • Take a boat trip to Churna Island, a popular spot for snorkeling, scuba diving, and marine life observation.
  </p>
  <h5>Afternoon</h5>
  <p>
    <strong>3. Manora Island</strong><br />
    • Visit Manora Island, known for its historic lighthouse, old churches, and serene beaches. It’s a great place for exploring and relaxing.
  </p>
  <h5>Evening</h5>
  <p>
    <strong>4. Do Darya</strong><br />
    • Enjoy dinner at Do Darya, a coastal dining area famous for its seafood restaurants and scenic views.
  </p>

  <h3>Four-Day Itinerary</h3>
  <h4>Day 4: Cultural Exploration and Shopping</h4>
  <h5>Morning</h5>
  <p>
    <strong>1. Frere Hall</strong><br />
    • Visit Frere Hall, a beautiful colonial-era building surrounded by lush gardens. It often hosts art exhibitions and cultural events.
  </p>
  <h5>Midday</h5>
  <p>
    <strong>2. National Museum of Pakistan</strong><br />
    • Explore the National Museum, which houses an extensive collection of artifacts representing Pakistan's cultural and historical heritage.
  </p>
  <h5>Afternoon</h5>
  <p>
    <strong>3. Dolmen Mall Clifton</strong><br />
    • Spend your afternoon shopping at Dolmen Mall Clifton, one of Karachi's premier shopping destinations offering a variety of local and international brands.
  </p>
  <h5>Evening</h5>
  <p>
    <strong>4. Burns Road</strong><br />
    • End your trip with a culinary tour of Burns Road, Karachi's famous food street. Indulge in traditional Pakistani dishes like nihari, biryani, and kebabs.
  </p>
`,
Lahore: `
  <h3>Day 1: Historical Marvels</h3>
  <h4>Morning</h4>
  <p>
    <strong>1. Badshahi Mosque</strong><br />
    • Start your day at the magnificent Badshahi Mosque. Spend the morning exploring the mosque’s vast courtyard, intricate designs, and minarets. Take your time to appreciate the architectural beauty and spiritual ambiance.
  </p>
  <h4>Midday</h4>
  <p>
    <strong>2. Lahore Fort (Shahi Qila)</strong><br />
    • After the mosque, head to the adjacent Lahore Fort. Spend a few hours exploring this UNESCO World Heritage site. Key highlights include the Alamgiri Gate, the Picture Wall, and the various gardens within the fort.
  </p>
  <h4>Afternoon</h4>
  <p>
    <strong>3. Shish Mahal (Palace of Mirrors)</strong><br />
    • Within the Lahore Fort, visit the Shish Mahal, known for its dazzling mirror work. Take your time to explore the intricate details and enjoy the panoramic views of the fort and surrounding areas.
  </p>
  <h4>Evening</h4>
  <p>
    <strong>4. Food Street (Fort Road)</strong><br />
    • Conclude your day with dinner at Food Street on Fort Road. Enjoy traditional Lahori cuisine while taking in the illuminated views of the Badshahi Mosque and Lahore Fort.
  </p>
  <h3>Day 2: Cultural Exploration</h3>
  <h4>Morning</h4>
  <p>
    <strong>1. Androon Lahore (Walled City)</strong><br />
    • Begin your day exploring Androon Lahore, the Walled City. Wander through the narrow lanes, admire the old havelis, and experience the vibrant local life. Visit the Shahi Hammam (Royal Bath) and other historical sites within the Walled City.
  </p>
  <h4>Midday</h4>
  <p>
    <strong>2. Delhi Gate</strong><br />
    • Head towards the Delhi Gate, one of the thirteen gates of the Walled City. Explore the surrounding area and immerse yourself in the historical significance of this entry point.
  </p>
  <h4>Afternoon</h4>
  <p>
    <strong>3. Lahore Museum or Anarkali Bazaar (Optional)</strong><br />
    • Depending on your interests, you can visit the Lahore Museum to explore its extensive collection of artifacts or take a stroll through the Anarkali Bazaar for some local shopping and street food.
  </p>
  <h4>Evening</h4>
  <p>
    <strong>4. Food Street (Gawalmandi)</strong><br />
    • End your day with a visit to another famous food street, Gawalmandi. Enjoy more of Lahore’s culinary delights and soak in the lively atmosphere.
  </p>
`,
Skardu: `
<h3>Day 1: Exploring Skardu Town and Nearby Attractions</h3>
<h4>Morning</h4>
<p>
  <strong>1. Skardu Fort (Kharpocho Fort)</strong><br />
  • 9:00 AM - 11:00 AM<br />
  • Begin your day with a visit to Skardu Fort, also known as Kharpocho Fort. This historical site offers panoramic views of Skardu town and the Indus River. The fort’s ruins and the scenic backdrop provide great photo opportunities and a sense of the region’s history.
</p>
<h4>Midday</h4>
<p>
  <strong>2. Shangrila Resort (Lower Kachura Lake)</strong><br />
  • 11:30 AM - 1:30 PM<br />
  • Head to Shangrila Resort, famously known as the “Heaven on Earth.” The resort is located next to Lower Kachura Lake, offering stunning views and a serene environment. Enjoy a boat ride on the lake or relax at the resort’s restaurant with some refreshments.
</p>
<h4>Afternoon</h4>
<p>
  <strong>3. Upper Kachura Lake</strong><br />
  • 2:00 PM - 4:00 PM<br />
  • A short drive from Lower Kachura Lake is Upper Kachura Lake. This lesser-known gem is perfect for a peaceful afternoon. Enjoy hiking around the lake, taking in the crystal-clear water and the surrounding mountains.
</p>
<h4>Evening</h4>
<p>
  <strong>4. Skardu Bazaar</strong><br />
  • 4:30 PM - 6:30 PM<br />
  • Conclude your day with a visit to Skardu Bazaar. Explore the local shops, buy some traditional Balti handicrafts, and taste local cuisine at one of the many eateries.
</p>

<h3>Day 2: Natural Wonders and Scenic Beauty</h3>
<h4>Morning</h4>
<p>
  <strong>1. Shigar Fort (Fong-Khar)</strong><br />
  • 8:30 AM - 11:00 AM<br />
  • Start your day early with a visit to Shigar Fort, a beautifully restored heritage fort turned into a museum and hotel. Explore the fort’s architecture and learn about the region’s history while enjoying the lush gardens.
</p>
<h4>Midday</h4>
<p>
  <strong>2. Katpana Desert (Cold Desert)</strong><br />
  • 11:30 AM - 1:00 PM<br />
  • After visiting Shigar Fort, head to the Katpana Desert, one of the highest cold deserts in the world. The unique landscape of sand dunes against the backdrop of snow-capped mountains makes for a remarkable experience.
</p>
<h4>Afternoon</h4>
<p>
  <strong>3. Satpara Lake</strong><br />
  • 2:00 PM - 4:00 PM<br />
  • Spend your afternoon at Satpara Lake, a stunning natural reservoir. Enjoy a boat ride or simply relax by the lakeside, soaking in the beauty of the turquoise waters surrounded by mountains.
</p>
<h4>Evening</h4>
<p>
  <strong>4. Chunda Valley</strong><br />
  • 4:30 PM - 6:30 PM<br />
  • Visit Chunda Valley, known for its lush green fields and picturesque views. It’s a great place for a peaceful evening walk and to witness local farming practices.
</p>

<h3>Day 3: Adventure and High Altitude Beauty</h3>
<h4>Morning</h4>
<p>
  <strong>1. Deosai National Park</strong><br />
  • 8:00 AM - 12:00 PM<br />
  • Dedicate your morning to exploring Deosai National Park, often called the “Land of Giants.” The park is known for its vast plains, rich wildlife, and seasonal flowers. Visit Sheosar Lake, one of the highest lakes in the world, located within the park.
</p>
<h4>Midday</h4>
<p>
  <strong>2. Sheosar Lake</strong><br />
  • 12:00 PM - 1:30 PM<br />
  • Enjoy a picnic lunch at Sheosar Lake, taking in the breathtaking views of the deep blue waters and the surrounding peaks. The serenity and beauty of this high-altitude lake are unmatched.
</p>
<h4>Afternoon</h4>
<p>
  <strong>3. Kachura Village</strong><br />
  • 2:00 PM - 4:00 PM<br />
  • On your way back to Skardu, stop by Kachura Village to experience the local Balti culture. Visit the local homes, interact with the villagers, and learn about their traditional lifestyle.
</p>
<h4>Evening</h4>
<p>
  <strong>4. Hussainabad Waterfall</strong><br />
  • 4:30 PM - 6:00 PM<br />
  • End your trip with a visit to the Hussainabad Waterfall. The short hike to the waterfall is rewarding, with stunning views and the refreshing sound of cascading water providing a perfect conclusion to your Skardu adventure.
</p>
`,
Swat: `
<h3>Day 1: Mingora and Surroundings</h3>
<h4>Morning</h4>
<p>
  <strong>1. Mingora</strong><br />
  • 9:00 AM - 10:00 AM<br />
  • Start your journey in Mingora, the largest city in Swat Valley. Explore the local market for some shopping and get a feel for the local culture.
</p>
<h4>Midday</h4>
<p>
  <strong>2. Butkara Stupa</strong><br />
  • 10:30 AM - 12:00 PM<br />
  • Visit the Butkara Stupa, an ancient Buddhist site dating back to the 2nd century BCE. This archaeological site provides insights into the region’s Buddhist history.
</p>
<p>
  <strong>3. Swat Museum</strong><br />
  • 12:30 PM - 2:00 PM<br />
  • Head to the Swat Museum to see a collection of Gandhara art and artifacts. The museum showcases the rich history and heritage of Swat Valley.
</p>
<p>
  <strong>4. Lunch in Mingora</strong><br />
  • 2:00 PM - 3:00 PM<br />
  • Enjoy a local lunch at one of Mingora’s restaurants.
</p>
<h4>Evening</h4>
<p>
  <strong>5. Fizagat Park</strong><br />
  • 3:30 PM - 5:30 PM<br />
  • Spend your evening at Fizagat Park, located along the banks of the Swat River. The park offers beautiful views and is a great place for a relaxing walk.
</p>

<h3>Day 2: Scenic Beauty and Adventure</h3>
<h4>Morning</h4>
<p>
  <strong>1. Malam Jabba</strong><br />
  • 8:00 AM - 12:00 PM<br />
  • Head to Malam Jabba, a popular ski resort in Pakistan. Enjoy skiing, snowboarding, or simply taking in the stunning views of the snow-capped peaks.
</p>
<h4>Midday</h4>
<p>
  <strong>2. Lunch at Malam Jabba</strong><br />
  • 12:00 PM - 1:00 PM<br />
  • Have lunch at one of the resort’s restaurants.
</p>
<h4>Afternoon</h4>
<p>
  <strong>3. Miandam</strong><br />
  • 2:00 PM - 5:00 PM<br />
  • Visit Miandam, a picturesque hill station surrounded by lush green forests. Take a hike or a nature walk to enjoy the serene environment and beautiful scenery.
</p>

<h3>Day 3: Upper Swat Valley and Lakes</h3>
<h4>Morning</h4>
<p>
  <strong>1. Kalam Valley</strong><br />
  • 7:00 AM - 10:00 AM<br />
  • Drive to Kalam Valley, known for its stunning landscapes and alpine meadows. The drive itself offers breathtaking views of the valley.
</p>
<h4>Midday</h4>
<p>
  <strong>2. Ushu Forest</strong><br />
  • 10:30 AM - 12:00 PM<br />
  • Explore Ushu Forest, a dense pine forest offering beautiful hiking trails and picnic spots.
</p>
<p>
  <strong>3. Lunch in Kalam</strong><br />
  • 12:00 PM - 1:00 PM<br />
  • Enjoy a local lunch in Kalam.
</p>
<h4>Afternoon</h4>
<p>
  <strong>4. Mahodand Lake</strong><br />
  • 1:30 PM - 4:00 PM<br />
  • Visit Mahodand Lake, located about 35 km from Kalam. The lake is known for its crystal-clear water and surrounding meadows. Enjoy boating, fishing, or just relaxing by the lake.
</p>
<h4>Evening</h4>
<p>
  <strong>5. Matiltan Waterfall</strong><br />
  • 4:30 PM - 6:00 PM<br />
  • On your way back to Kalam, stop by Matiltan Waterfall. The waterfall is a beautiful spot for photography and enjoying nature.
</p>

<h3>Day 4: Exploring and Relaxing</h3>
<h4>Morning</h4>
<p>
  <strong>1. Bahrain</strong><br />
  • 8:00 AM - 10:00 AM<br />
  • Visit Bahrain, a charming town known for its riverside views and handicrafts. Stroll through the town, visit local shops, and enjoy the scenic beauty.
</p>
<h4>Midday</h4>
<p>
  <strong>2. Madyan</strong><br />
  • 11:00 AM - 1:00 PM<br />
  • Head to Madyan, a hill station famous for its trout fish. Enjoy a trout lunch at one of the local restaurants.
</p>
<h4>Afternoon</h4>
<p>
  <strong>3. Behrain Valley</strong><br />
  • 2:00 PM - 4:00 PM<br />
  • Spend your afternoon exploring Behrain Valley. Walk along the river, enjoy the serene environment, and take in the lush greenery.
</p>
<h4>Evening</h4>
<p>
  <strong>4. Return to Mingora</strong><br />
  • 5:00 PM - 6:00 PM<br />
  • Head back to Mingora to conclude your trip. Enjoy a farewell dinner at a local restaurant.
</p>
`

};

export default function Destinations() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      name: "Karachi",
      image: karachi,
    },
    {
      name: "Lahore",
      image: lahore,
    },
    {
      name: "Islamabad",
      image: islamabad,
    },
    {
      name: "Skardu",
      image: skardu,
    },
    {
      name: "Swat",
      image: swat,
    }
  ];

  const handleViewItinerary = (name) => {
    console.log("Selected location:", name); // Debugging line
    const itinerary = itineraries[name] || 'Itinerary not available.';
    setSelectedLocation(itinerary);
    setShowModal(true);
  };
  

  return (
    <Section id="destination">
      <div className="info">
        <h2>
          Top <span>Destinations</span> In Pakistan
        </h2>
        <p> 
        At Nomad Nest, we are committed to sustainable and responsible travel. We work with local partners and communities to ensure that our activities have a positive impact on the environment and contribute to the well-being of the places we visit. Nomad Nest is dedicated to fostering a work environment that is not only productive but also sustainable and culturally enriching. We partner with local communities and businesses to support economic growth and ensure that our presence benefits the places we operate in.
Embark on a journey with Nomad Nest and discover a world without boundaries. Your next adventure awaits!

        </p>
        {/* <Button text="Discover More" /> */}
      </div>

      <div className="destinations">
        {data.map(({ name, image }) => (
          <div className="destination" key={name}>
            <div className="image-container">
              <img src={image} alt="destinations" />
              <div className="overlay">
                <Button text="View Itinerary" onClick={() => handleViewItinerary(name)} />
              </div>
            </div>
            <div className="name">
              <h3>{name}</h3>
            </div>
          </div>
        ))}
      </div>

      
<Modal
  show={showModal}
  onClose={() => setShowModal(false)}
  title={selectedLocation}
>
  <div dangerouslySetInnerHTML={{ __html: selectedLocation }} />
</Modal>
    </Section>
  );
}

const Section = styled.section`


  display: flex;
  gap: 5rem;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    h2 {
      font-size: 3rem;
      line-height: 3rem;
      span {
        color: var(--primary-color);
      }
    }
    p {
      color: var(--secondary-text);
    }
  }
  .destinations {
    flex: 2;
    display: flex;
    gap: 2rem;
    .destination {
      position: relative;
      flex: 1;
      .image-container {
        position: relative;
        width: 100%;
        height: 20rem; /* Adjust the height as needed */
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5); /* semi-transparent background */
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: auto; /* Ensure overlay can receive clicks */
          z-index: 1; /* Ensure overlay is on top */
        }
      }
      &:hover .overlay {
        opacity: 1;
      }
      .name {
        position: absolute;
        bottom: 0rem;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          to bottom,
          #ffffff14,
          #000000ae
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: flex;
        flex-direction: column-reverse;
        h3 {
          margin-left: 1rem;
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 3rem;
    .destinations {
      flex-direction: column;
      .destination {
        img {
          width: 100%;
        }
      }
    }
  }
`;
