var ical2json = require("ical2json");
var icalData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Athlete Meal Planner//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH

BEGIN:VEVENT
SUMMARY:Monday Lunch - Spicy Black Bean Burrito Bowl
DTSTART:20231120T133000Z
DTEND:20231120T143000Z
DESCRIPTION:Ingredients:\n- Black beans\n- Brown rice\n- Avocado\n- Corn\n- Salsa\n- Cilantro\n- Lime\n\nInstructions:\nLayer brown rice, black beans, avocado slices, and corn in a bowl. Top with salsa, chopped cilantro, and a squeeze of lime.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Monday Dinner - Grilled Salmon with Quinoa and Spinach Salad
DTSTART:20231120T183000Z
DTEND:20231120T193000Z
DESCRIPTION:Ingredients:\n- Salmon fillets\n- Quinoa\n- Spinach\n- Cherry tomatoes\n- Cucumber\n- Feta cheese\n- Olive oil\n- Lemon juice\n\nInstructions:\nGrill salmon. Serve with a salad of quinoa, spinach, cherry tomatoes, cucumber, and feta, dressed with olive oil and lemon juice.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Tuesday Lunch - Protein-Packed Greek Yogurt Chicken Salad
DTSTART:20231121T133000Z
DTEND:20231121T143000Z
DESCRIPTION:Ingredients:\n- Chicken breast\n- Greek yogurt\n- Grapes\n- Walnuts\n- Celery\n- Whole grain bread\n\nInstructions:\nMix diced chicken breast with Greek yogurt, halved grapes, chopped walnuts, and diced celery. Serve on whole grain bread or over greens.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Tuesday Dinner - Lean Beef Stir-Fry with Broccoli and Bell Peppers
DTSTART:20231121T183000Z
DTEND:20231121T193000Z
DESCRIPTION:Ingredients:\n- Lean beef strips\n- Broccoli\n- Bell peppers\n- Soy sauce\n- Brown rice\n- Ginger\n- Garlic\n\nInstructions:\nStir-fry beef with broccoli and bell peppers in a sauce made from soy sauce, ginger, and garlic. Serve over brown rice.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Wednesday Lunch - Tuna Salad Stuffed Avocados
DTSTART:20231122T133000Z
DTEND:20231122T143000Z
DESCRIPTION:Ingredients:\n- Tuna\n- Avocado\n- Red onion\n- Celery\n- Greek yogurt\n- Dijon mustard\n\nInstructions:\nMix tuna with diced red onion, celery, Greek yogurt, and Dijon mustard. Stuff into avocado halves.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Wednesday Dinner - Baked Chicken Thighs with Roasted Sweet Potatoes and Brussels Sprouts
DTSTART:20231122T183000Z
DTEND:20231122T193000Z
DESCRIPTION:Ingredients:\n- Chicken thighs\n- Sweet potatoes\n- Brussels sprouts\n- Olive oil\n- Rosemary\n- Thyme\n\nInstructions:\nBake chicken thighs seasoned with rosemary and thyme. Serve with roasted sweet potatoes and Brussels sprouts.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Thursday Lunch - Mediterranean Lentil Salad
DTSTART:20231123T133000Z
DTEND:20231123T143000Z
DESCRIPTION:Ingredients:\n- Lentils\n- Cherry tomatoes\n- Cucumber\n- Red onion\n- Feta cheese\n- Olive oil\n- Lemon juice\n\nInstructions:\nCombine cooked lentils with cherry tomatoes, cucumber, red onion, and feta cheese. Dress with olive oil and lemon juice.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Thursday Dinner - Turkey Meatballs with Zucchini Noodles and Marinara Sauce
DTSTART:20231123T183000Z
DTEND:20231123T193000Z
DESCRIPTION:Ingredients:\n- Ground turkey\n- Zucchini\n- Marinara sauce\n- Parmesan cheese\n- Basil\n\nInstructions:\nMake turkey meatballs and bake. Serve with zucchini noodles and marinara sauce, topped with grated Parmesan and fresh basil.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Friday Lunch - Egg Salad on Sprouted Grain Bread
DTSTART:20231124T133000Z
DTEND:20231124T143000Z
DESCRIPTION:Ingredients:\n- Hard-boiled eggs\n- Greek yogurt\n- Dijon mustard\n- Sprouted grain bread\n- Lettuce\n- Tomato\n\nInstructions:\nMash hard-boiled eggs and mix with Greek yogurt and Dijon mustard. Serve on sprouted grain bread with lettuce and tomato.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Friday Dinner - Baked Tilapia with Steamed Green Beans and Almonds
DTSTART:20231124T183000Z
DTEND:20231124T193000Z
DESCRIPTION:Ingredients:\n- Tilapia fillets\n- Green beans\n- Almonds\n- Olive oil\n- Lemon wedges\n\nInstructions:\nBake tilapia seasoned with a little olive oil. Serve with steamed green beans sprinkled with almonds and a side of lemon wedges.
END:VEVENT

BEGIN:VEVENT
SUMMARY:Sunday - Shopping List
DTSTART:20231119T120000Z
DTEND:20231119T130000Z
DESCRIPTION:Shopping List:\n- Black beans\n- Brown rice\n- Avocado\n- Corn\n- Salsa\n- Cilantro\n- Lime\n- Salmon fillets\n- Spinach\n- Cherry tomatoes\n- Feta cheese\n- Chicken breast\n- Greek yogurt\n- Grapes\n- Walnuts\n- Celery\n- Lean beef strips\n- Broccoli\n- Bell peppers\n- Tuna\n- Red onion\n- Chicken thighs\n- Sweet potatoes\n- Brussels sprouts\n- Lentils\n- Ground turkey\n- Zucchini\n- Marinara sauce\n- Parmesan cheese\n- Basil\n- Hard-boiled eggs\n- Sprouted grain bread\n- Tilapia fillets\n- Green beans\n- Almonds\n- Various spices and condiments
END:VEVENT

END:VCALENDAR`

var output = ical2json.convert(icalData);


export default function handler(req, res) {
    console.log("hello")
    console.log(output)
    res.status(200).json({ text: output });
}