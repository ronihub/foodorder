import { RestaurantClient } from "../interfaces/restaurant";
import mangalimg from "../images/mangal-bg.jpeg";
import saffranbg from "../images/saffran-bg.jpg";
import fornobg from "../images/forno-bg.jpg";
import adana from "../images/adana.jpg";
import kycklingspett from "../images/kycklingspett.jpg";
import lammspett from "../images/lammspett.jpg";
import laxfile from "../images/laxfile.jpg";
import kebabtallrik from "../images/kebabtallrik.jpg";

export const restaurant_clients: RestaurantClient[] = [
  {
    id: 1,
    restaurant_name: "Lezzet Mangal",
    restaurant_location: "Oslogatan 12, 164 32 Kista",
    cover_image: mangalimg,
    urlpath: "lezzetmangal",
    categories: [
      {
        title: "varmrätter",
        products: [
          {
            product_id: 99,
            product_title: "Adana Kebabler",
            product_category: "Varmrätter",
            product_cost: 125,
            product_image: adana,
            product_options: [
              {
                option_title: "Val av tillbehör",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: false,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Coca-Cola", price: 15 },
                  { title: "Coca-Cola Zero", price: 15 },
                  { title: "Ayran", price: 15 },
                ],
                obligatory: {
                  isObligatory: false,
                  numbOfOptionsToBeObligatory: 1,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 2,
            product_title: "Kebabtallrik",
            product_category: "Varmrätter",
            product_cost: 135,
            product_image: kebabtallrik,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 3,
            product_title: "Kycklingspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_image: kycklingspett,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 4,
            product_title: "Lammspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_image: lammspett,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 5,
            product_title: "Lammstek",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Val av tillbehör",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 6,
            product_title: "Laxfile",
            product_category: "Varmrätter",
            product_cost: 125,
            product_image: laxfile,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
        ],
      },
      {
        title: "varmrätter",
        products: [
          {
            product_id: 7,
            product_title: "Adana Kebab",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 2,
            product_title: "Kebabtallrik",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 3,
            product_title: "Kycklingspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 4,
            product_title: "Lammspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 5,
            product_title: "Lammstek",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 6,
            product_title: "Laxfile",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
        ],
      },
      {
        title: "varmrätter",
        products: [
          {
            product_id: 1,
            product_title: "Adana Kebab",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 2,
            product_title: "Kebabtallrik",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 3,
            product_title: "Kycklingspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 4,
            product_title: "Lammspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 5,
            product_title: "Lammstek",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 6,
            product_title: "Laxfile",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    restaurant_name: "Forno Romano",
    restaurant_location: "Oslogatan 12, 164 32 Kista",
    cover_image: fornobg,
    urlpath: "fornoromano",
    categories: [
      {
        title: "varmrätter",
        products: [
          {
            product_id: 1,
            product_title: "Adana Kebab",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 2,
            product_title: "Kebabtallrik",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 3,
            product_title: "Kycklingspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 4,
            product_title: "Lammspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 5,
            product_title: "Lammstek",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 6,
            product_title: "Laxfile",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    restaurant_name: "Saffran",
    restaurant_location: "Oslogatan 12, 164 32 Kista",
    cover_image: saffranbg,
    urlpath: "saffran",
    categories: [
      {
        title: "varmrätter",
        products: [
          {
            product_id: 1,
            product_title: "Adana Kebab",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 2,
            product_title: "Kebabtallrik",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 3,
            product_title: "Kycklingspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 4,
            product_title: "Lammspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 5,
            product_title: "Lammstek",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 6,
            product_title: "Laxfile",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    restaurant_name: "Saffran",
    restaurant_location: "Oslogatan 12, 164 32 Kista",
    cover_image: saffranbg,
    urlpath: "saffran",
    categories: [
      {
        title: "varmrätter",
        products: [
          {
            product_id: 1,
            product_title: "Adana Kebab",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 2,
            product_title: "Kebabtallrik",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 3,
            product_title: "Kycklingspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 4,
            product_title: "Lammspett",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 5,
            product_title: "Lammstek",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
          {
            product_id: 6,
            product_title: "Laxfile",
            product_category: "Varmrätter",
            product_cost: 125,
            product_options: [
              {
                option_title: "Ät med",
                options: [
                  { title: "ris", price: 15 },
                  { title: "bulgur", price: 15 },
                  { title: "pommes", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 1,
                  maxLimit: 1,
                },
                isFree: true,
              },
              {
                option_title: "Dips",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 2,
                },
                isFree: true,
              },
              {
                option_title: "Tillägg",
                options: [
                  { title: "Tomatsås", price: 15 },
                  { title: "Vitlökssås", price: 15 },
                  { title: "Bearnaise", price: 15 },
                ],
                obligatory: {
                  isObligatory: true,
                  numbOfOptionsToBeObligatory: 0,
                  maxLimit: 3,
                },
                isFree: false,
              },
            ],
          },
        ],
      },
    ],
  },
];
