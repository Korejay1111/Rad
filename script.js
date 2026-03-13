// ===== Sample Car Data =====
const carsData = [
    {
        id: 1,
        name: "Lexus RX 350",
        brand: "Lexus",
        year: 2010,
        price: 22500000,
        fuel: "Petrol",
        transmission: "Automatic",
        bodyType: "Sedan",
        mileage: "12,000",
        engine: "3.5 L V6 Petrol Engine",
        interior: "Spacious cabin with premium upholstery, Automatic climate control, Power seats and windows, Well‑cushioned seats",
        safety: "Dual front airbags, ABS (Anti‑Lock Braking System), Seatbelts for all passengers, Strong build quality, Central locking system",
        exterior: "Elegant luxury sedan design, Sleek body with clean lines and executive, Well‑maintained paintwork, Stylish alloy wheels, Clear headlights and taillights",
        infotainment: "Audio system with CD, MP3, AUX & FM radio, Steering wheel controls, Bluetooth connectivity, Multiple power outlets & interior lighting",
        description: "Luxurious comfort and smooth ride, Quiet cabin, Excellent reliability & durability, Great value for money — affordable luxury in the used market",
        images: [
            "./Image/lexus-rx-350/1.jpeg",
            "./Image/lexus-rx-350/2.jpeg",
            "./Image/lexus-rx-350/3.jpeg",
            "./Image/lexus-rx-350/4.jpeg",
            "./Image/lexus-rx-350/5.jpeg"

        ],
        status: "In Stock",
        badges: ["new"],
        whyGet: [
            "Exceptional performance with 335 horsepower",
            "Luxurious interior with premium materials",
            "Advanced safety features for peace of mind",
            "Spacious cabin perfect for families",
            "Excellent resale value"
        ]
    },
    {
        id: 2,
        name: " Toyota Avalon XLE ",
        brand: "Toyota",
        year: 2015,
        price: 15000000,
        fuel: "Petrol",
        transmission: "Automatic",
        bodyType: "Luxury",
        mileage: "5,000",
        engine: "3.5L V6 Engine",
        // interior: "Nappa Leather, Massaging Seats, Burmester Sound",
        // safety: "5-Star Euro NCAP, Pre-Safe, Autonomous Emergency Braking",
        // exterior: "Designo Paint, Digital Light, 20&quot; AMG Wheels",
        infotainment: "Bluetooth Connectivity,Premium Sound System",
        description: "Presenting a clean and well-maintained Toyota Avalon XLE — a premium full-size sedan built for comfort, class, and smooth performance",
        images: [
            "./Image/2015 Toyota Avalon XLE/1.jpeg",
            "./Image/2015 Toyota Avalon XLE/2.jpeg",
            "./Image/2015 Toyota Avalon XLE/3.jpeg",
            "./Image/2015 Toyota Avalon XLE/4.jpeg",
            "./Image/2015 Toyota Avalon XLE/6.jpeg"
        ],
        status: "In Stock",
        badges: ["hot"],
        whyGet: [
            "Ultimate luxury experience",
            "Cutting-edge technology and innovation",
            "Unmatched comfort and refinement",
            "Prestige and status symbol",
            "Superior build quality"
        ]
    },
    {
        id: 3,
        name: " Toyota Highlander XSE",
        brand: "Toyota",
        year: 2023,
        price: 82000000,
        fuel: "Petrol (Gasoline)",
        transmission: "8-Speed Automatic",
        bodyType: "Electric",
        mileage: "8,000",
        engine: " 2.4 L Turbocharged 4-cylinder petrol",
        interior: "Premium interior with leather or SofTex upholstery ,Comfortable 7-seat layout with captain chairs,Heated front seats (on many units), Ambient interior lighting,Multiple USB ports and power outlets,Three-zone automatic climate control (on many units)",
        safety: "Toyota Safety Sense suite (adaptive cruise, pre-collision, lane assist),Blind Spot Monitoring,Rearview camera,Multiple airbags and ABS braking",
        exterior: "Sport-tuned design with unique XSE styling,20″ Alloy Wheels, LED Headlights and LED Fog lamps, Roof Rails,Hands-Free Power Liftgate (varies by unit), Bold front grille and twin-tip exhaust (on many units) ",
        infotainment: "Infotainment touchscreen with Android Auto & Apple CarPlay,Bluetooth and USB connectivity,Wireless smartphone charging (on many units)",
        description: "Comfortable family SUV with three-row seating, Sporty suspension tuned for better handling (XSE), Strong resale and Toyota reliability  ",
        images: [
            "./Image/Toyota Highlander XSE/1.jpeg",
            "./Image/Toyota Highlander XSE/2.jpeg",
            "./Image/Toyota Highlander XSE/3.jpeg",
            "./Image/Toyota Highlander XSE/4.jpeg",

        ],
        status: "In Stock",
        badges: ["new", "hot"],
        whyGet: [
            "Mind-blowing acceleration",
            "Zero emissions, sustainable driving",
            "Over-the-air software updates",
            "Industry-leading range",
            "Futuristic design and technology"
        ]
    },
    {
        id: 4,
        name: " Toyota Camry Sport ",
        brand: "Toyota",
        year: 2013,
        price: 12500000,
        fuel: "Petrol (Gasoline)",
        transmission: "Automatic",
        bodyType: "Electric",
        mileage: "3,000",
        engine: "2.5 L 4-Cylinder Petrol",
        interior: "Spacious Cabin — Comfortable Seating,Sport Fabric / Sports Upholstery,Air Conditioning — Cold & Effective, Power Windows & Mirrors, Central Locking System,Ample Legroom for Passengers",
        safety: "Dual Front Airbags,ABS Brakes (Anti-Lock Braking System), Seatbelts for All Passengers,Reverse / Backup Sensors (if equipped), Strong Safety Record",
        exterior: "Sport-Styled Body Kit, Stylish Alloy Wheels,LED Headlights (where applicable),Clean & Neat Bodywork,No Major Dents or Rust, Tinted Windows (optional)",
        infotainment: " Steering Audio Controls (model dependent),CD / MP3 Player, AM/FM Radio,AUX/USB Inputs",
        description: "Known for Toyota Durability & Reliability, Low Running and Maintenance Cost,Ideal for Daily Use & Taxi Operations,Comfortable for City and Highway Driving",
        images: [
            "./Image/2013 Toyota Camry Sport/1.jpeg",
            "./Image/2013 Toyota Camry Sport/2.jpeg",
            "./Image/2013 Toyota Camry Sport/3.jpeg",
            "./Image/2013 Toyota Camry Sport/4.jpeg",
            "./Image/2013 Toyota Camry Sport/5.jpeg"
        ],
        status: "In Stock",
        badges: ["hot"],
        whyGet: [
            "Stunning design and aerodynamics",
            "Instant torque and thrilling performance",
            "Premium Audi craftsmanship",
            "Advanced electric technology",
            "Exclusive and limited production"
        ]
    },
    {
        id: 5,
        name: "Toyota Highlander XLE ",
        brand: "Toyota",
        year: 2015,
        price: 26500000,
        fuel: "Petrol",
        transmission: " 8-Speed Automatic (ECT-i) ",
        bodyType: "Luxury",
        mileage: "1,500",
        engine: " 3.5 L V6 petrol engine",
        interior: "Plush and spacious cabin with premium materials,3-Zone Automatic Climate Control — keeps all passengers comfortable, Power seats with adjustable driver support,Rear air conditioning vents — great for passengers in the back.",
        safety: "Toyota Safety Sense suite — includes adaptive cruise control and lane departure warning,Blind spot monitoring with rear cross-traffic alert (available on many units), Multiple airbags for driver and passengers.",
        exterior: " Sleek and modern SUV design with rugged appeal,18″ Alloy Wheels (standard on XLE), LED lights and heated mirrors (varies by specific unit),Roof rails for added cargo flexibility.",
        infotainment: "Large infotainment touchscreen with Bluetooth phone and audio connectivity, AM/FM Radio and auxiliary/USB ports,Steering wheel controls and cruise control.",
        description: " Great family SUV with 3-row seating and refined comfort,Strong resale value and Toyota reliability,  Excellent for city use, road trips, and everyday duties.",
        images: [
            "./Image/Toyota Highlander XLE/1.jpeg",
            "./Image/Toyota Highlander XLE/2.jpeg",
            "./Image/Toyota Highlander XLE/3.jpeg",
             "./Image/Toyota Highlander XLE/4.jpeg",
              "./Image/Toyota Highlander XLE/5.jpeg"
        ],
        status: "In Stock",
        badges: ["new", "hot"],
        whyGet: [
            "Legendary 911 heritage",
            "Mind-bending performance",
            "Precision engineering",
            "Timeless design",
            "Exclusivity and prestige"
        ]
    },
    {
        id: 6,
        name: "Lexus RX 350 F-Sport",
        brand: "lexus",
        year: 2016,
        price: 39000000,
        fuel: " Petrol (Unleaded gasoline) ",
        transmission: "Automatic",
        bodyType: "Luxury",
        mileage: "15,000",
        engine: "3.5 L V6 gasoline engine (2GR-FKS) with 295 hp and 267 lb-ft torque",
        interior: " Spacious and premium leather interior — luxurious seating for 5 passengers, Heated and power-adjustable front seats (varies by unit), Dual-zone automatic climate control — comfort for all occupants, Large cargo space with fold-down rear seats — versatile storage, Paddle shifters & sport-tuned seats — driver-focused feel. ",
        safety: " ABS with Electronic Brake-force Distribution, Vehicle Stability Control & Traction Control, Multiple airbags for driver and passengers, Rearview camera & parking sensors (varies by unit)",
        exterior: "✔ Sport-inspired design with F-Sport body styling and signature Lexus grille enhancements, 20″ alloy wheels with aggressive stance (varies by unit), LED headlights, fog lights, and sleek aerodynamic profile,Power sunroof (if equipped) — great for open-air feel. (optional depending on unit)",
        infotainment: "Infotainment touchscreen with Bluetooth connectivity (for hands-free calling & audio),Steering wheel controls for audio, cruise, and phone, Multiple USB and power outlets to stay connected on the go.",
        description: "Experience luxury, comfort, and performance with this 2016 Lexus RX 350 F-Sport, a sophisticated SUV that blends sporty character with refined comfort. Known for its reliability, comfort, and strong resale value, this RX 350 F-Sport is ideal for both city driving and long road trips.  ",
        images: [
            "./Image/2016 Lexus RX 350 F-Sport/1.jpeg",
            "./Image/2016 Lexus RX 350 F-Sport/2.jpeg",
            "./Image/2016 Lexus RX 350 F-Sport/3.jpeg",
            "./Image/2016 Lexus RX 350 F-Sport/4.jpeg",
            "./Image/2016 Lexus RX 350 F-Sport/5.jpeg",
        ],
        status: "In Stock",
        badges: [],
        whyGet: [
            "Thrilling performance",
            "Aggressive M styling",
            "Advanced M technology",
            "Perfect for enthusiasts",
            "Strong resale value"
        ]
    },
    {
        id: 7,
        name: "Lexus RX 350",
        brand: "Lexus",
        year: 2012,
        price: 22500000 ,
        fuel: "Petrol (Gasoline)",
        transmission: "Automatic",
        bodyType: "SUV",
        mileage: "10,000",
        engine: " 3.5 L V6 petrol engine",
        interior: "Spacious cabin with premium upholstery and quality finishes,Comfortable seating for 5 passengers — ideal for families,Automatic climate control — keeps everyone comfortable,Large cargo space with fold-down rear seats for extra storage,Quality sound system and well-placed controls for convenience",
        safety: "Multiple airbags for driver & passengers,ABS, traction control, and stability control for added safety, Rear parking sensors / camera (if equipped)",
        exterior: "✔ Stylish and iconic Lexus RX design — sleek SUV silhouette,Elegant 19″ alloy wheels for commanding road presence,LED headlights and bold Lexus front grille,Near-flush body lines and premium finish.",
        infotainment: "✔ Bluetooth connectivity, AUX/USB input options,Audio and cruise controls mounted on steering wheel,Power windows, mirrors, and central locking.",
        description: "A timeless luxury SUV offering refined comfort, reliable performance, and premium road presence. This 2012 Lexus RX 350 is ideal for executives, families, and premium SUV seekers — known worldwide for quiet ride quality and Lexus dependability.",
        images: [
            "./Image/2012 Lexus RX 350/1.jpeg",
            "./Image/2012 Lexus RX 350/2.jpeg",
            "./Image/2012 Lexus RX 350/3.jpeg",
             "./Image/2012 Lexus RX 350/4.jpeg",
              "./Image/2012 Lexus RX 350/5.jpeg",
        ],
        status: "In Stock",
        badges: ["hot"],
        whyGet: [
            "Powerful V8 performance",
            "Luxurious and spacious",
            "Advanced AMG technology",
            "Versatile SUV practicality",
            "Prestige and status"
        ]
    },
    {
        id: 8,
        name: " Lexus ES 350 ",
        brand: "Lexus",
        year: 2010,
        price: 8500000,
        fuel: " Petrol (Unleaded gasoline)",
        transmission: "Automatic",
        bodyType: "SUV",
        mileage: "2,000",
        engine: "3.5 L V6 Petrol Engine",
        interior: "Spacious cabin with premium upholstery, Comfortable seating for 5 adults — excellent comfort on long trips,Automatic climate control — cold and effective, Power seats and windows — convenience at your fingertips, Well‑cushioned seats — refined ride quality",
        safety: "✔ Dual front airbags — driver & passenger,ABS (Anti‑Lock Braking System) — improved braking stability,Seatbelts for all passengers,Strong build quality — trusted Lexus safety engineering, Central locking system — added security",
        exterior: "✔ Elegant luxury sedan design — timeless Lexus styling,Sleek body with clean lines and executive presence,Well‑maintained paintwork — shiny finish, no major dents or rust,Stylish alloy wheels — complete upscale appearance, Clear headlights and taillights — great road visibility",
        infotainment: "✔ Audio system with CD, MP3, AUX & FM radio, Steering wheel controls — easy access to audio & cruise control,Bluetooth connectivity (if equipped) — hands‑free calls and audio streaming,Multiple power outlets & interior lighting",
        description: "Condition: Clean Local Used — well serviced and inspected,	Mileage: [Insert Actual Mileage] km (accurate reading),Service History: [Insert if available],Clean Interior & Exterior",
        images: [
            "./Image/Lexus ES 350/1.jpeg",
            "./Image/Lexus ES 350/2.jpeg",
            "./Image/Lexus ES 350/3.jpeg",
            "./Image/Lexus ES 350/4.jpeg",
            "./Image/Lexus ES 350/5.jpeg"
        ],
        status: "In Stock",
        badges: ["new"],
        whyGet: [
            "Best-selling electric SUV",
            "Excellent range and efficiency",
            "Spacious and practical",
            "Advanced technology",
            "Low maintenance costs"
        ]
    },
    {
        id: 9,
        name: "Lexus RX 350 F‑Sport ",
        brand: "Lexus",
        year: 2023,
        price: 62000000,
        fuel: "Premium Unleaded Petrol ",
        transmission: "Automatic",
        bodyType: "SUV",
        mileage: "6,000",
        engine: "2.4 L Turbocharged Inline‑4 Premium Unleaded petrol ",
        interior: "✔ Luxurious F‑Sport leather or premium seats — sport bolstering for added support, Spacious 5‑seater cabin with high‑quality materials, 14″ infotainment touchscreen with advanced navigation and connectivity,Apple CarPlay & Android Auto compatibility — stay connected and entertained, Heated and ventilated front seats — comfort in all weather conditions,Head‑Up Display (HUD) — vital info projected on the windscreen (if equipped),Wireless charging pad and premium sound system — modern convenience and audio quality.",
        safety: " ABS with Electronic Brake‑Force Distribution (EBD),Multiple airbags (front, side, curtain), Vehicle Stability Control & Traction Control,Blind Spot Monitoring & Rear Cross‑Traffic Alert,Parking sensors & rear camera — confidence in every maneuver",
        exterior: "✔ Aggressive F‑Sport exterior styling with distinctive mesh grille and F‑Sport bumpers,21″ Alloy Wheels with F‑Sport design — premium and striking,Triple‑beam LED headlights — sharp lighting and modern appearance,Panoramic moonroof — enhances cabin brightness and open‑air feel (if equipped),Sport‑accented body kit — stands out from regular trims. ",
        infotainment: "✔ Lexus Safety System+ including adaptive cruise control, lane assist, and automatic emergency braking,Surround‑view camera system for safer parking and maneuvering,Digital instrument cluster and intuitive multimedia interface,Keyless entry and push‑start ignition — stylish and convenient.",
        description: "✅ Premium performance with sporty character — perfect for both city and highway driving,Stylish and bold F‑Sport design — head‑turning presence on the road, Loaded with modern comforts, tech, and safety features, Excellent balance of responsiveness and refined ride quality.  ",
        images: [
            "./Image/2023 Lexus RX 350 F‑Sport/1.jpeg",
            "./Image/2023 Lexus RX 350 F‑Sport/2.jpeg",
            "./Image/2023 Lexus RX 350 F‑Sport/3.jpeg",
            "./Image/2023 Lexus RX 350 F‑Sport/4.jpeg",
            "./Image/2023 Lexus RX 350 F‑Sport/5.jpeg"
        ],
        status: "In Stock",
        badges: [],
        whyGet: [
            "Elegant and sophisticated",
            "Smooth electric performance",
            "Premium Audi quality",
            "Advanced technology",
            "Comfortable ride"
        ]
    },
    {
       
    id: 10,
    name: "Toyota RAV4 LE",
    brand: "Toyota",
    year: 2024,
    price: 57000000,
    fuel: "Petrol",
    transmission: "CVT / 8-Speed Automatic",
    bodyType: "Compact SUV",
    mileage: "Insert Actual Mileage km",
    engine: "2.0L / 2.5L 4-Cylinder Petrol",
    
    interior: "Spacious 5-Seater Cabin, Durable Fabric Seats, Automatic Climate Control, Rear AC Vents, Multi-Information Display",
    
    safety: "Toyota Safety Sense, Pre-Collision System, Lane Departure Alert, Adaptive Cruise Control, ABS & EBD, Vehicle Stability Control, Multiple Airbags, Hill-Start Assist",
    
    exterior: "LED Headlights with DRL, 17-inch Alloy Wheels, Bold SUV Styling, Aerodynamic Body Design",
    
    infotainment: "8-inch Touchscreen Display, Apple CarPlay & Android Auto, Bluetooth Connectivity, USB Ports, Rearview Camera",
    
    description: "Foreign Used (Tokunbo) 2024 Toyota RAV4 LE in excellent condition, accident-free and well maintained. A reliable, fuel-efficient, and practical SUV perfect for families and professionals. Fully cleared and ready for viewing and test drive. Available in Nigeria for ₦57,000,000.",

        images: [
            "./Image/2024 Toyota RAV4 LE/1.jpeg",
            "./Image/2024 Toyota RAV4 LE/2.jpeg",
            "./Image/2024 Toyota RAV4 LE/3.jpeg",
            "./Image/2024 Toyota RAV4 LE/4.jpeg",
            "./Image/2024 Toyota RAV4 LE/5.jpeg"
        ],
        status: "In Stock",
        badges: ["used"],
        whyGet: [
            "Unparalleled luxury",
            "Cutting-edge technology",
            "Exceptional comfort",
            "Executive presence",
            "Innovative features"
        ]
    },
    {
    id: 12,
    name: "Lexus RX 350 F Sport",
    brand: "Lexus",
    year: 2013,
    price: 28000000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Luxury SUV",
    mileage: "Insert Actual Mileage km",
    engine: "3.5L V6 Petrol",
    
    interior: "Premium Leather Interior, F-Sport Trim, Push Start Button, Spacious 5-Seater Cabin",
    
    safety: "All-Wheel Drive (AWD), Multiple Airbags, ABS, Stability Control, Reverse Camera",
    
    exterior: "F-Sport Grille, Sport-Tuned Suspension, Sharp Body Design, Alloy Wheels",
    
    infotainment: "Factory Navigation System, Bluetooth Connectivity, AUX Input, Premium Audio System",
    
    description: "Foreign Used 2013 Lexus RX 350 F Sport in super clean condition. Accident-free with sharp body, smooth engine and transmission. A luxury SUV that delivers performance, comfort, and reliability. Available for ₦28,000,000.",
        images: [
            "./Image/Lexus RX 350 F Sport (2)/1.jpeg",
            "./Image/Lexus RX 350 F Sport (2)/2.jpeg",
            "./Image/Lexus RX 350 F Sport (2)/3.jpeg",
            "./Image/Lexus RX 350 F Sport (2)/4.jpeg",
            "./Image/Lexus RX 350 F Sport (2)/5.jpeg",
        ],
        status: "In Stock",
        badges: ["new", "hot"],
        whyGet: [
            "Revolutionary design",
            "Ultra-modern technology",
            "Impressive electric range",
            "Zero-emission luxury",
            "Future-forward innovation"
        ]
    },
    {
    id: 13,
    name: "Lexus ES 350",
    brand: "Lexus",
    year: 2013,
    price: 8000000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Luxury Sedan",
    mileage: "Insert Actual Mileage km",
    engine: "3.5L V6 Petrol",
    
    interior: "Premium Leather Seats, Spacious & Comfortable Cabin, Smooth Ride Quality",
    
    safety: "Accident-Free, Multiple Airbags, ABS, Stability Control, Reverse Camera",
    
    exterior: "Clean Foreign Used Body, Alloy Wheels, Elegant Lexus Sedan Design",
    
    infotainment: "Factory Navigation System, Bluetooth Connectivity, AUX & USB Ports, Premium Audio System",
    
    description: "Foreign Used 2013 Lexus ES 350 in excellent condition. Accident-free, well maintained, with smooth engine and transmission. A refined luxury sedan offering comfort, reliability, and performance. Available for ₦19,000,000. Serious buyers welcome for inspection.",
        images: [
            "./Image/Lexus ES 350 Sedan/1.jpeg",
            "./Image/Lexus ES 350 Sedan/2.jpeg",
            "./Image/Lexus ES 350 Sedan/3.jpeg",
            "./Image/Lexus ES 350 Sedan/4.jpeg",
            "./Image/Lexus ES 350 Sedan/5.jpeg",
        ],
        status: "In Stock",
        badges: ["hot"],
        whyGet: [
            "Record-breaking performance",
            "Porsche DNA in an SUV",
            "Exceptional handling",
            "Luxurious interior",
            "Exclusivity"
        ]
    },
    {
    id: 14,
    name: "Toyota Venza",
    brand: "Toyota",
    year: 2012,
    price: 13000000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Crossover SUV",
    mileage: "Insert Actual Mileage km",
    engine: "2.7L / 3.5L Petrol (Spec Dependent)",
    
    interior: "Spacious & Comfortable Cabin, Family-Friendly Interior, Air Conditioning, Power Windows & Mirrors",
    
    safety: "Multiple Airbags, ABS, Stability Control, Solid Toyota Build Quality",
    
    exterior: "Clean Body Finish, Alloy Wheels, Well Maintained Exterior Design",
    
    infotainment: "Bluetooth Connectivity, AUX & USB Ports, Factory Audio System",
    
    description: "Pre-owned 2012 Toyota Venza in excellent condition. Clean and well maintained crossover SUV with smooth engine and automatic transmission. Spacious, reliable, and perfect for family use or daily driving. Available for ₦13,000,000.",
      images: [
           
            "./Image/Toyota Venza/1.jpeg",
            "./Image/Toyota Venza/2.jpeg",
            "./image/Toyota Venza/3.jpeg",
            "./image/Toyota Venza/4.jpeg",
        ],
        status: "In Stock",
        badges: ["Used"],
        whyGet: [
            "Record-breaking performance",
            "Porsche DNA in an SUV",
            "Exceptional handling",
            "Luxurious interior",
            "Exclusivity"
        ]
},
{
    id: 15,
    name: "Mercedes-Benz GLE 350 4MATIC",
    brand: "Mercedes-Benz",
    year: 2016,
    price: 27000000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Luxury SUV",
    mileage: "Insert Actual Mileage km",
    engine: "3.5L V6 Petrol",
    
    interior: "Premium Leather Interior, Spacious Luxury Cabin, Sunroof / Moonroof, Comfortable Seating",
    
    safety: "4MATIC All-Wheel Drive, Multiple Airbags, ABS, Stability Control, Reverse Camera, Parking Sensors",
    
    exterior: "Clean Foreign Used Body, Alloy Wheels, Elegant Mercedes-Benz SUV Styling",
    
    infotainment: "Navigation System, Bluetooth Connectivity, USB & AUX Ports, Premium Audio System",
    
    description: "Foreign Used 2016 Mercedes-Benz GLE 350 4MATIC in excellent condition. Accident-free with clean body and smooth ride. A powerful and luxurious SUV offering comfort, performance, and advanced features. ",


     images: [
            "./Image/Mercedes-Benz GLE/1.jpeg",
            "./Image/Mercedes-Benz GLE/2.jpeg",
            
        ],
        status: "In Stock",
        badges: ["hot"],
        whyGet: [
            "Record-breaking performance",
            "Porsche DNA in an SUV",
            "Exceptional handling",
            "Luxurious interior",
            "Exclusivity"
        ]
},
{
    id: 16,
    name: "Toyota Hilux Adventure",
    brand: "Toyota",
    year: 2023,
    price: 85000000,
    fuel: "Petrol / Diesel (Spec Dependent)",
    transmission: "Automatic",
    bodyType: "Pickup Truck",
    mileage: "Insert Actual Mileage km",
    engine: "Powerful & Fuel-Efficient Engine",
    
    interior: "Premium Leather Interior, Spacious Cabin, Keyless Entry & Push Start, Comfort-Focused Adventure Package",
    
    safety: "4WD Capability, Reverse Camera, Parking Sensors, Multiple Airbags, Stability Control",
    
    exterior: "Adventure Package Premium Styling, Alloy Wheels, LED Headlights with DRL, Rugged Body Design, Heavy-Duty Suspension",
    
    infotainment: "Touchscreen Infotainment System, Bluetooth Connectivity, USB Ports, Premium Audio System",
    
    description: "Foreign Used 2023 Toyota Hilux Adventure in super clean condition. A premium pickup truck built for power, durability, and luxury comfort. Strong 4WD performance perfect for both city driving and off-road adventures.",
     images: [
            "./Image/Toyota Hilux Adventure/1.jpeg",
            "./Image/Toyota Hilux Adventure/2.jpeg",
            "./Image/Toyota Hilux Adventure/3.jpeg",
            "./Image/Toyota Hilux Adventure/4.jpeg"
        ],
        status: "In Stock",
        badges: ["hot"],
        whyGet: [
            "Record-breaking performance",
            "Porsche DNA in an SUV",
            "Exceptional handling",
            "Luxurious interior",
            "Exclusivity"
        ]
},
{
    id: 17,
    name: "Lexus RX 350",
    brand: "Lexus",
    year: 2010,
    price: 16000000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Luxury SUV",
    mileage: "Insert Actual Mileage km",
    engine: "3.5L V6 Petrol",
    
    interior: "Premium Leather Interior, Power Seats, Spacious & Comfortable Cabin, Cold Air Conditioning",
    
    safety: "Accident-Free, AWD / FWD (Specify), Multiple Airbags, ABS, Stability Control, Reverse Camera",
    
    exterior: "Clean Body Finish, Alloy Wheels, Classic Lexus SUV Design",
    
    infotainment: "Bluetooth Connectivity, AUX & USB Ports, Factory Audio System",
    
    description: "Pre-owned 2010 Lexus RX 350 in excellent condition. Clean and accident-free with smooth automatic transmission and reliable 3.5L V6 engine. A well-maintained luxury SUV offering comfort, durability, and performance.",
      images: [
            "./Image/Lexus RX 350(2)/1.jpeg",
            "./Image/Lexus RX 350(2)/2.jpeg",
            "./Image/Lexus RX 350(2)/3.jpeg"
        ],
        status: "In Stock",
        badges: ["Pre-Owned"],
        whyGet: [
            "Record-breaking performance",
            "Porsche DNA in an SUV",
            "Exceptional handling",
            "Luxurious interior",
            "Exclusivity"
        ]

},
{
    id: 18,
    name: "Lexus RX 350",
    brand: "Lexus",
    year: 2010,
    price: 15500000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Luxury SUV",
    mileage: "500 km",
    engine: "3.5L V6 Petrol",
    
    interior: "Premium Leather Interior, Power Seats, Spacious & Comfortable Cabin, Cold Air Conditioning",
    
    safety: "Accident-Free, AWD / FWD (Specify), Multiple Airbags, ABS, Stability Control, Reverse Camera",
    
    exterior: "Clean Body Finish, Alloy Wheels, Classic Lexus SUV Design",
    
    infotainment: "Bluetooth Connectivity, AUX & USB Ports, Factory Audio System",
    
    description: "Pre-owned 2010 Lexus RX 350 in excellent condition. Clean and accident-free with smooth automatic transmission and reliable 3.5L V6 engine. A well-maintained luxury SUV offering comfort, durability, and performance.",
      images: [
            "./Image/Pre-Owned 2010 Lexus RX 350/1.jpeg",
            "./Image/Pre-Owned 2010 Lexus RX 350/2.jpeg",
            "./Image/Pre-Owned 2010 Lexus RX 350/3.jpeg",
            "./Image/Pre-Owned 2010 Lexus RX 350/4.jpeg",
            "./Image/Pre-Owned 2010 Lexus RX 350/5.jpeg",
        ],
        status: "In Stock",
        badges: ["Pre-owned"],
        whyGet: [
            "Record-breaking performance",
            "Porsche DNA in an SUV",
            "Exceptional handling",
            "Luxurious interior",
            "Exclusivity"
        ]

}
    
];

// ===== State Management =====
let filteredCars = [...carsData];
// Clear recently viewed and favorites on page refresh
localStorage.removeItem('recentlyViewed');
localStorage.removeItem('favorites');
let recentlyViewed = [];
let favorites = [];
let compareList = JSON.parse(localStorage.getItem('compareList')) || [];
let currentModalCar = null;
let currentImageIndex = 0;

// ===== DOM Elements =====
const carsGrid = document.getElementById('carsGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const yearFilter = document.getElementById('yearFilter');
const fuelFilter = document.getElementById('fuelFilter');
const transmissionFilter = document.getElementById('transmissionFilter');
const bodyTypeFilter = document.getElementById('bodyTypeFilter');
const sortFilter = document.getElementById('sortFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const carModal = document.getElementById('carModal');
const modalClose = document.getElementById('modalClose');
const scrollTopBtn = document.getElementById('scrollTop');
const scrollBottomBtn = document.getElementById('scrollBottom');
const recentlyViewedSection = document.getElementById('recentlyViewedSection');
const recentlyViewedGrid = document.getElementById('recentlyViewedGrid');
const compareSection = document.getElementById('compareSection');
const compareContainer = document.getElementById('compareContainer');
const favoritesSection = document.getElementById('favoritesSection');
const favoritesGrid = document.getElementById('favoritesGrid');
const clearCompareBtn = document.getElementById('clearCompare');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
    updateRecentlyViewed();
    updateCompareSection();
    updateFavoritesSection();
    animateStatistics();
    setupEventListeners();
    setupScrollButtons();
});

// ===== Event Listeners =====
function setupEventListeners() {
    // Search and Filters
    searchInput.addEventListener('input', filterCars);
    brandFilter.addEventListener('change', filterCars);
    priceRange.addEventListener('input', (e) => {
        priceValue.textContent = `#${parseInt(e.target.value).toLocaleString()}`;
        filterCars();
    });
    yearFilter.addEventListener('change', filterCars);
    fuelFilter.addEventListener('change', filterCars);
    transmissionFilter.addEventListener('change', filterCars);
    bodyTypeFilter.addEventListener('change', filterCars);
    sortFilter.addEventListener('change', filterCars);
    clearFiltersBtn.addEventListener('click', clearFilters);

    // Modal
    modalClose.addEventListener('click', closeModal);
    carModal.addEventListener('click', (e) => {
        if (e.target === carModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Gallery Navigation
    document.getElementById('galleryPrev').addEventListener('click', () => navigateGallery(-1));
    document.getElementById('galleryNext').addEventListener('click', () => navigateGallery(1));

    // Compare
    clearCompareBtn.addEventListener('click', clearCompare);

    // Mobile Menu
    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
}

// ===== Render Cars =====
function renderCars() {
    if (filteredCars.length === 0) {
        carsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    carsGrid.style.display = 'grid';
    noResults.style.display = 'none';

    carsGrid.innerHTML = filteredCars.map(car => createCarCard(car)).join('');
}

function createCarCard(car) {
    const isFavorite = favorites.includes(car.id);
    const isCompare = compareList.includes(car.id);
    const badges = car.badges.map(badge => 
        `<span class="badge ${badge}">${badge}</span>`
    ).join('');

    return `
        <div class="car-card" data-id="${car.id}">
            <div class="car-image">
                <img src="${car.images[0]}" alt="${car.name}" loading="lazy">
                <div class="car-badges">
                    ${badges}
                </div>
                <div class="car-actions">
                    <button class="car-action-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${car.id})" title="Save to Favorites">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="car-action-btn ${isCompare ? 'active' : ''}" onclick="toggleCompare(${car.id})" title="Compare">
                        <i class="fas fa-balance-scale"></i>
                    </button>
                </div>
            </div>
            <div class="car-info">
                <h3 class="car-name">${car.name}</h3>
                <p class="car-year">${car.year}</p>
                <p class="car-price">#${car.price.toLocaleString()}</p>
                <p class="car-description">${car.description}</p>
                <div class="car-buttons">
                    <button class="btn-view-details" onclick="openModal(${car.id})">View Details</button>
                    <a href="https://wa.me/2349061957126?text=Hello, I'm interested in the ${car.year} ${car.name} listed on your website. Please send more details." 
                       class="btn-whatsapp-quick" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// ===== Filter Cars =====
function filterCars() {
    const searchTerm = searchInput.value.toLowerCase();
    const brand = brandFilter.value;
    const maxPrice = parseInt(priceRange.value);
    const year = yearFilter.value;
    const fuel = fuelFilter.value;
    const transmission = transmissionFilter.value;
    const bodyType = bodyTypeFilter.value;
    const sort = sortFilter.value;

    filteredCars = carsData.filter(car => {
        const matchesSearch = car.name.toLowerCase().includes(searchTerm) || 
                             car.description.toLowerCase().includes(searchTerm);
        const matchesBrand = !brand || car.brand === brand;
        const matchesPrice = car.price <= maxPrice;
        const matchesYear = !year || car.year.toString() === year;
        const matchesFuel = !fuel || car.fuel === fuel;
        const matchesTransmission = !transmission || car.transmission === transmission;
        const matchesBodyType = !bodyType || car.bodyType === bodyType;

        return matchesSearch && matchesBrand && matchesPrice && matchesYear && 
               matchesFuel && matchesTransmission && matchesBodyType;
    });

    // Sort
    switch(sort) {
        case 'price-low':
            filteredCars.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredCars.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredCars.sort((a, b) => b.year - a.year);
            break;
    }

    renderCars();
}

function clearFilters() {
    searchInput.value = '';
    brandFilter.value = '';
    priceRange.value = 200000;
    priceValue.textContent = '$200,000';
    yearFilter.value = '';
    fuelFilter.value = '';
    transmissionFilter.value = '';
    bodyTypeFilter.value = '';
    sortFilter.value = 'default';
    filterCars();
}

// ===== Modal Functions =====
function openModal(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;

    currentModalCar = car;
    currentImageIndex = 0;

    // Update modal content
    document.getElementById('modalCarName').textContent = car.name;
    document.getElementById('modalYear').textContent = car.year;
    document.getElementById('modalPrice').textContent = `#${car.price.toLocaleString()}`;
    document.getElementById('modalStatus').textContent = car.status;
    document.getElementById('modalStatus').className = `modal-status ${car.status === 'In Stock' ? 'in-stock' : 'sold'}`;
    document.getElementById('modalEngine').textContent = car.engine;
    document.getElementById('modalTransmission').textContent = car.transmission;
    document.getElementById('modalMileage').textContent = car.mileage;
    document.getElementById('modalFuel').textContent = car.fuel;
    document.getElementById('modalInterior').textContent = car.interior;
    document.getElementById('modalSafety').textContent = car.safety;
    document.getElementById('modalExterior').textContent = car.exterior;
    document.getElementById('modalInfotainment').textContent = car.infotainment;

    // Update WhatsApp button
    const whatsappBtn = document.getElementById('modalWhatsappBtn');
    whatsappBtn.href = `https://wa.me/2349061957126?text=Hello, I'm interested in the ${car.year} ${car.name} listed on your website. Please send more details.`;

    // Update why get list
    const whyGetList = document.getElementById('modalWhyGet');
    whyGetList.innerHTML = car.whyGet.map(item => `
        <div class="why-get-item">
            <i class="fas fa-check-circle"></i>
            <span>${item}</span>
        </div>
    `).join('');

    // Update gallery
    updateGallery();

    // Add to recently viewed
    addToRecentlyViewed(carId);

    // Show modal
    carModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    carModal.classList.remove('active');
    document.body.style.overflow = '';
    currentModalCar = null;
}

function updateGallery() {
    if (!currentModalCar) return;

    const mainImage = document.getElementById('modalMainImage');
    const thumbnailSlider = document.getElementById('thumbnailSlider');

    mainImage.src = currentModalCar.images[currentImageIndex];

    thumbnailSlider.innerHTML = currentModalCar.images.map((img, index) => `
        <img src="${img}" alt="Thumbnail ${index + 1}" 
             class="thumbnail ${index === currentImageIndex ? 'active' : ''}" 
             onclick="selectImage(${index})">
    `).join('');
}

function selectImage(index) {
    currentImageIndex = index;
    updateGallery();
}

function navigateGallery(direction) {
    if (!currentModalCar) return;

    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = currentModalCar.images.length - 1;
    } else if (currentImageIndex >= currentModalCar.images.length) {
        currentImageIndex = 0;
    }
    updateGallery();
}

// ===== Recently Viewed =====
function addToRecentlyViewed(carId) {
    // Remove if already exists
    recentlyViewed = recentlyViewed.filter(id => id !== carId);
    // Add to beginning
    recentlyViewed.unshift(carId);
    // Keep only last 6
    recentlyViewed = recentlyViewed.slice(0, 6);
    // Save to localStorage
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    // Update UI
    updateRecentlyViewed();
}

function updateRecentlyViewed() {
    if (recentlyViewed.length === 0) {
        recentlyViewedSection.style.display = 'none';
        return;
    }

    recentlyViewedSection.style.display = 'block';
    const viewedCars = recentlyViewed.map(id => carsData.find(c => c.id === id)).filter(Boolean);
    recentlyViewedGrid.innerHTML = viewedCars.map(car => createCarCard(car)).join('');
}

// ===== Favorites =====
function toggleFavorite(carId) {
    const index = favorites.indexOf(carId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(carId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderCars();
    updateFavoritesSection();
}

function updateFavoritesSection() {
    if (favorites.length === 0) {
        favoritesSection.style.display = 'none';
        return;
    }

    favoritesSection.style.display = 'block';
    const favoriteCars = favorites.map(id => carsData.find(c => c.id === id)).filter(Boolean);
    favoritesGrid.innerHTML = favoriteCars.map(car => createCarCard(car)).join('');
}

// ===== Compare =====
function toggleCompare(carId) {
    const index = compareList.indexOf(carId);
    if (index > -1) {
        compareList.splice(index, 1);
    } else {
        if (compareList.length >= 3) {
            alert('You can compare up to 3 cars at a time');
            return;
        }
        compareList.push(carId);
    }
    localStorage.setItem('compareList', JSON.stringify(compareList));
    renderCars();
    updateCompareSection();
}

function updateCompareSection() {
    if (compareList.length === 0) {
        compareSection.style.display = 'none';
        return;
    }

    compareSection.style.display = 'block';
    const compareCars = compareList.map(id => carsData.find(c => c.id === id)).filter(Boolean);
    compareContainer.innerHTML = compareCars.map(car => createCarCard(car)).join('');
}

function clearCompare() {
    compareList = [];
    localStorage.setItem('compareList', JSON.stringify(compareList));
    renderCars();
    updateCompareSection();
}

// ===== Scroll Buttons =====
function setupScrollButtons() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollTop > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }

        if (scrollTop < scrollHeight - 300) {
            scrollBottomBtn.classList.add('visible');
        } else {
            scrollBottomBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollBottomBtn.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
}

// ===== Statistics Animation =====
function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// ===== Mobile Menu =====
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(10, 10, 10, 0.98)';
    navLinks.style.padding = '20px';
    navLinks.style.borderTop = '1px solid rgba(212, 175, 55, 0.3)';
}
// Theme Toggle
    function toggleTheme() {
      const html = document.documentElement;
      const icon = document.getElementById('theme-icon');
      
      if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
      }
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      const icon = document.getElementById('theme-icon');
      if (savedTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    }