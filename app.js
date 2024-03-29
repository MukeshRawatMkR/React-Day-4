import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESsGm92deQDTJR9fiWcHZ8S94NCmFLSkkQg&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
 //destructuring of objects:
const{cloudinaryImageId, name, cuisines, avgRating,deliveryTime}=resList[0]?.data;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      {/* <h4>{resList[0].data.sla.deliveryTime} minutes </h4> */}
      <h4>{deliveryTime} minutes </h4>
     
       </div> 
  );
};

const resList = [
 {
  type:"restaurant",
   data: {
        id: "97829",
        name: "Romnik Pizza",
        cloudinaryImageId: "lnvcfknv2yyhidbh6mky",
        locality: "Post Office Road",
        areaName: "Subhash Nagar",
        costForTwo: "₹275 for two",
        cuisines: ["Italian", "Pizzas"],
        avgRating: 4.3,
        parentId: "475411",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 0.4,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "0.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-16 23:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "40% OFF", subHeader: "UPTO ₹80" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      data: {
        id: "530605",
        name: "Kathi Junction",
        cloudinaryImageId: "svfdhtf9m0fhnqve3bgp",
        locality: "New Basti",
        areaName: "Subhash Nagar",
        costForTwo: "₹100 for two",
        cuisines: ["rolls", "Snacks"],
        avgRating: 4.3,
        parentId: "1935",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 0.5,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-17 01:30:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "20% OFF", subHeader: "UPTO ₹50" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      }, 
      data: {
        id: "531280",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Saharanpur Road",
        areaName: "Subhash Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.4,
        parentId: "547",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-16 23:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "30% OFF", subHeader: "UPTO ₹75" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      data: {
        id: "558120",
        name: "Warning! Taste Ahead",
        cloudinaryImageId: "sjlakhq7qzmwvveopfcv",
        locality: "Post Office Road",
        areaName: "Subhash Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Fast Food", "Burgers", "Beverages", "Snacks"],
        avgRating: 4.4,
        veg: true,
        parentId: "335574",
        avgRatingString: "4.4",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 0.7,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-17 01:30:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "30% OFF", subHeader: "UPTO ₹75" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      }}
    ];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search here</div>
      <div className="res-container">
{//whenever we loop through map we should always use key to get rid of warning on console.
  resList.map((restaurant)=>(<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
}
        </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
