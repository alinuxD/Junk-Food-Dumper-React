import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";

// core components

// icons
import iconPeople from 'assets/img/icon_people.png';
import iconClock from 'assets/img/icon_clock.png';
import iconPlate from 'assets/img/icon_plate.png';
import iconStar from 'assets/img/icon_star.png';

/* Star 1 */




import DefaultFooter from "../components/Footers/DefaultFooter.js";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import AboutPageHeader from "../components/Headers/AboutPageHeader";
import AboutPage from "./AboutPage";
import FoodSearchHeader from "../components/Headers/FoodSearchHeader";
import HomePageHeader from "../components/Headers/HomePageHeader";
import DietPlanPage from "./DietPlanPage";
import {round} from "mathjs";
import Javascript from "./index-sections/Javascript";
import FoodRatingExample from "../components/FootRating/FoodRatingExample";


const divRedStyleLeft= {
    height:180,
    width:180,
    backgroundColor:'#C4C4C4',
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
};


const divRedStyle1 = {
    height:160,
    width:135,
    backgroundColor:'#F68888',
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    float:'left',
    marginLeft:'80px'
};
const divRedStyle2 = {
    height:160,
    width:135,
    backgroundColor:'#83CF77',
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    float:'left',
    marginLeft:'40px'
};
const divRedStyle3 = {
    height:160,
    width:135,
    backgroundColor:'#EDF49C',
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    float:'left',
    marginLeft:'80px',
    marginTop:'40px'
};
const divRedStyle4 = {
    height:160,
    width:135,
    backgroundColor:'#7CADF8',
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    float:'left',
    marginLeft:'40px',
    marginTop:'40px'

};

const titleStyle ={
    textAlign:'center',
    height:35,
    lineHeight:'35px',
    color:'white',
    fontSize: 30,
    fontWeight:'bold'
};
const middleStyle1 ={
    textAlign:'center',
    height:50,
    lineHeight:'50px',
    color:'#000000',
    fontSize: 20,
    fontWeight:'bold'
};

const middleStyle2 ={
    textAlign:'center',
    height:20,
    lineHeight:'10px',
    color:'#000000',
    fontSize: 15,
    fontWeight:'bold'
};
const bottomStyle ={
    textAlign:'center',
    height:45,
    lineHeight:'50px',
    color:'white',
    fontSize: 25,
    fontWeight:'bold'
};

const middleOutStyle ={
    textAlign:'center',
    height:80,
    width:120,
    backgroundColor:'white',
    fontWeight:'bold',
    margin:'auto',
};



function FoodDetailsPage() {

    React.useEffect(() => {
        document.body.classList.add("about-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("about-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    // var jsonString3 ='{"recipes":{"page_number":"0","recipe":[{"recipe_nutrition":{"protein":"4.79","fat":"4.02","calories":"263","carbohydrate":"55.08"},"recipe_id":"53697","recipe_image":"https://m.ftscrt.com/static/recipe/647f989b-a0bf-4511-a4e8-ebd4ce865da2.jpg","recipe_description":"Delicious sweet baked apple crisp.","recipe_name":"Apple Crisp","recipe_url":"https://www.fatsecret.com/recipes/apple-crisp/Default.aspx"},{"recipe_nutrition":{"protein":"1.50","fat":"0.24","calories":"74","carbohydrate":"18.46"},"recipe_id":"3629531","recipe_image":"https://m.ftscrt.com/static/recipe/5c77b950-7756-4126-a1fb-cc024fd4bbe7.jpg","recipe_description":"A sweet, crunchy dessert delight.","recipe_name":"Apple Jubilee","recipe_url":"https://www.fatsecret.com/recipes/apple-jubilee/Default.aspx"},{"recipe_nutrition":{"protein":"4.63","fat":"1.27","calories":"261","carbohydrate":"57.75"},"recipe_id":"5062321","recipe_image":"https://m.ftscrt.com/static/recipe/275d07ca-3be5-48f1-a04a-c503c3a99a57.jpg","recipe_description":"Warm rice with sweet cooked apples topped with fresh whipped cream and cinnamon.","recipe_name":"Apple Rice","recipe_url":"https://www.fatsecret.com/recipes/apple-rice/Default.aspx"},{"recipe_nutrition":{"protein":"6.97","fat":"4.79","calories":"230","carbohydrate":"40.48"},"recipe_id":"68","recipe_description":"A breakfast treat.","recipe_name":"Apple Pancakes","recipe_url":"https://www.fatsecret.com/recipes/apple-pancakes/Default.aspx"},{"recipe_nutrition":{"protein":"6.09","fat":"5.13","calories":"289","carbohydrate":"55.95"},"recipe_id":"69","recipe_description":"Homemade pastry and delicous fillings - what could be better.","recipe_name":"Apple Strudel","recipe_url":"https://www.fatsecret.com/recipes/apple-strudel/Default.aspx"},{"recipe_nutrition":{"protein":"4.24","fat":"7.45","calories":"222","carbohydrate":"35.87"},"recipe_id":"1444326","recipe_image":"https://m.ftscrt.com/static/recipe/40ce4d5d-9c4e-4bea-806e-d5a29f5166dc.jpg","recipe_description":"Apple-Pecan muffins without  applesauce but no less fabulous.","recipe_name":"Apple-Pecan Muffins","recipe_url":"https://www.fatsecret.com/recipes/apple-pecan-muffins/Default.aspx"},{"recipe_nutrition":{"protein":"3.18","fat":"6.22","calories":"161","carbohydrate":"23.10"},"recipe_id":"87708","recipe_description":"A delicious tasting apple dessert.","recipe_name":"Apple Coffee Cake","recipe_url":"https://www.fatsecret.com/recipes/apple-coffee-cake/Default.aspx"},{"recipe_nutrition":{"protein":"2.69","fat":"2.40","calories":"120","carbohydrate":"21.52"},"recipe_id":"8292886","recipe_image":"https://m.ftscrt.com/static/recipe/cb5a9e80-bf45-448f-b44e-efc2b678df53.jpg","recipe_description":"These pancakes are like breakfast apple pies.","recipe_name":"Honey-Apple Pancakes","recipe_url":"https://www.fatsecret.com/recipes/honey-apple-pancakes/Default.aspx"},{"recipe_nutrition":{"protein":"4.08","fat":"2.37","calories":"204","carbohydrate":"42.55"},"recipe_id":"88671","recipe_image":"https://m.ftscrt.com/static/recipe/43ded143-41ce-4e64-9bb3-a61e0fe82711.jpg","recipe_description":"Russian apple cake that\'s sure to please.","recipe_name":"Apple Pie Sharlotka","recipe_url":"https://www.fatsecret.com/recipes/apple-pie-sharlotka/Default.aspx"},{"recipe_nutrition":{"protein":"1.47","fat":"0.90","calories":"99","carbohydrate":"22.25"},"recipe_id":"23704421","recipe_image":"https://m.ftscrt.com/static/recipe/bf05e1a1-3aa7-49ef-a656-450efc944a7a.jpg","recipe_description":"A simple no fat, lower calorie crisp that can be prepared in minutes. This recipe has been designed with a smaller household in mind.","recipe_name":"Apple Crisp III","recipe_url":"https://www.fatsecret.com/recipes/apple-crisp-iii/Default.aspx"},{"recipe_nutrition":{"protein":"2.10","fat":"5.75","calories":"165","carbohydrate":"29.37"},"recipe_id":"75421","recipe_image":"https://m.ftscrt.com/static/recipe/5ebc2f48-f44c-4f4a-b882-6337f36fcc08.jpg","recipe_description":"A delicious warm dessert that you can also enjoy as a sweet breakfast.","recipe_name":"Apple Oatmeal Crumble","recipe_url":"https://www.fatsecret.com/recipes/apple-oatmeal-crumble/Default.aspx"},{"recipe_nutrition":{"protein":"10.25","fat":"2.95","calories":"162","carbohydrate":"23.66"},"recipe_id":"33556","recipe_description":"Really delicious pancakes.","recipe_name":"Dutch Apple Pancakes","recipe_url":"https://www.fatsecret.com/recipes/dutch-apple-pancakes/Default.aspx"},{"recipe_nutrition":{"protein":"2.15","fat":"0.57","calories":"150","carbohydrate":"38.10"},"recipe_id":"11142","recipe_description":"A simple naturally sweetened dessert.","recipe_name":"Apple Apricot Delight","recipe_url":"https://www.fatsecret.com/recipes/apple-apricot-delight/Default.aspx"},{"recipe_nutrition":{"protein":"6.07","fat":"1.66","calories":"122","carbohydrate":"21.90"},"recipe_id":"49251190","recipe_image":"https://m.ftscrt.com/static/recipe/7c4f9054-be2e-461b-b5cf-4746f104a91d.jpg","recipe_description":"A yummy and moist bread perfect as post-workout snack.","recipe_name":"Apple Protein Muffins","recipe_url":"https://www.fatsecret.com/recipes/49251190-apple-protein-muffins/Default.aspx"},{"recipe_nutrition":{"protein":"0.29","fat":"0.13","calories":"93","carbohydrate":"24.64"},"recipe_id":"89086","recipe_description":"Delicious relish that\'s more tart than sweet.","recipe_name":"Cranberry-Apple Relish","recipe_url":"https://www.fatsecret.com/recipes/cranberry-apple-relish/Default.aspx"},{"recipe_nutrition":{"protein":"1.36","fat":"3.92","calories":"155","carbohydrate":"30.73"},"recipe_id":"46763","recipe_description":"Sweet and yummy.  Use your favorite apple and leave the skin on for more fiber.","recipe_name":"Caramel Apple Salad","recipe_url":"https://www.fatsecret.com/recipes/caramel-apple-salad/Default.aspx"},{"recipe_nutrition":{"protein":"5.35","fat":"6.14","calories":"200","carbohydrate":"34.22"},"recipe_id":"72929","recipe_description":"A classic easy-to-make open sandwich combination.","recipe_name":"Apple Tahini Sandwich","recipe_url":"https://www.fatsecret.com/recipes/apple-tahini-sandwich/Default.aspx"},{"recipe_nutrition":{"protein":"0.28","fat":"0.16","calories":"50","carbohydrate":"13.52"},"recipe_id":"240626","recipe_image":"https://m.ftscrt.com/static/recipe/4ef51efb-cdd1-4d8f-8b6d-609b3472b4a9.jpg","recipe_description":"Delicious homemade dried apple chips.","recipe_name":"Spiced Apple Chips","recipe_url":"https://www.fatsecret.com/recipes/spiced-apple-chips/Default.aspx"},{"recipe_nutrition":{"protein":"6.92","fat":"5.88","calories":"150","carbohydrate":"18.61"},"recipe_id":"5932335","recipe_image":"https://m.ftscrt.com/static/recipe/91610324-6b85-422d-b78f-1182dc5ff826.jpg","recipe_description":"Apple cinnamon pancakes packed with fiber and protein.","recipe_name":"Apple Oat Pancakes","recipe_url":"https://www.fatsecret.com/recipes/apple-oat-pancakes/Default.aspx"},{"recipe_nutrition":{"protein":"3.29","fat":"7.67","calories":"121","carbohydrate":"11.63"},"recipe_id":"6126470","recipe_image":"https://m.ftscrt.com/static/recipe/f1ad6168-f5d1-49a1-b4a2-d9cbbb638312.jpg","recipe_description":"A tasty yet healthy muffin for snack times.","recipe_name":"Apple Carrot Muffins","recipe_url":"https://www.fatsecret.com/recipes/apple-carrot-muffins/Default.aspx"},{"recipe_nutrition":{"protein":"1.72","fat":"5.12","calories":"157","carbohydrate":"25.27"},"recipe_id":"153512","recipe_description":"A healthy yummy alternative for dessert.","recipe_name":"Apple Cake Squares","recipe_url":"https://www.fatsecret.com/recipes/apple-cake-squares/Default.aspx"},{"recipe_nutrition":{"protein":"1.43","fat":"3.94","calories":"150","carbohydrate":"29.54"},"recipe_id":"55986","recipe_description":"A light version of a favorite salad that\'s quick, easy to make and really yummy.","recipe_name":"Taffy Apple Salad","recipe_url":"https://www.fatsecret.com/recipes/taffy-apple-salad/Default.aspx"},{"recipe_nutrition":{"protein":"2.78","fat":"0.36","calories":"91","carbohydrate":"19.97"},"recipe_id":"1257439","recipe_image":"https://m.ftscrt.com/static/recipe/22b4c038-41f4-4d9b-864f-27fab067f72b.jpg","recipe_description":"Sweet potatoes and apples add moistness and natural sweetness to this simple cake.","recipe_name":"Sweet Potato Apple Cake","recipe_url":"https://www.fatsecret.com/recipes/sweet-potato-apple-cake/Default.aspx"},{"recipe_nutrition":{"protein":"1.66","fat":"0.55","calories":"116","carbohydrate":"28.83"},"recipe_id":"112120","recipe_description":"Get your juicer into action with this healthy drink.","recipe_name":"Carrot, Apple & Ginger Juice","recipe_url":"https://www.fatsecret.com/recipes/carrot-apple-and-ginger-juice/Default.aspx"},{"recipe_nutrition":{"protein":"4.23","fat":"0.74","calories":"245","carbohydrate":"55.33"},"recipe_id":"8407097","recipe_image":"https://m.ftscrt.com/static/recipe/8b47b761-47e1-4d1b-85b9-e494a582561b.jpg","recipe_description":"A hot snack made in minutes from apples and dark rye crackers.","recipe_name":"Dark Rye Apple Crumble","recipe_url":"https://www.fatsecret.com/recipes/dark-rye-apple-crumble/Default.aspx"},{"recipe_nutrition":{"protein":"4.45","fat":"2.16","calories":"212","carbohydrate":"46.82"},"recipe_id":"8360700","recipe_image":"https://m.ftscrt.com/static/recipe/985e7aa0-af37-470f-8a49-37393af50a1c.jpg","recipe_description":"A combo of homemade applesauce and quinoa.","recipe_name":"Cinnamon Apple Breakfast Quinoa","recipe_url":"https://www.fatsecret.com/recipes/cinnamon-apple-breakfast-quinoa/Default.aspx"},{"recipe_nutrition":{"protein":"1.89","fat":"0.23","calories":"189","carbohydrate":"47.06"},"recipe_id":"2719247","recipe_image":"https://m.ftscrt.com/static/recipe/4679dd5f-1cbc-4af2-be1d-97fcfc203793.jpg","recipe_description":"A great healthy side dish for the cooler months of the year.","recipe_name":"Sweet Potato & Apple Bake","recipe_url":"https://www.fatsecret.com/recipes/sweet-potato-and-apple-bake/Default.aspx"},{"recipe_nutrition":{"protein":"2.47","fat":"0.86","calories":"337","carbohydrate":"89.62"},"recipe_id":"95623","recipe_image":"https://m.ftscrt.com/static/recipe/b934b01f-794c-43ac-9a38-5a3c69ea173f.jpg","recipe_description":"A healthy heart drink for two.","recipe_name":"Apple Grape & Celery Tonic","recipe_url":"https://www.fatsecret.com/recipes/apple-grape-and-celery-tonic/Default.aspx"},{"recipe_nutrition":{"protein":"23.86","fat":"4.80","calories":"217","carbohydrate":"21.47"},"recipe_id":"462815","recipe_image":"https://m.ftscrt.com/static/recipe/bccb6cfd-bde9-4c42-8788-23a5e8a7af1f.jpg","recipe_description":"A tasty way to change up pork chops.","recipe_name":"Apple & Sage Pork Chops","recipe_url":"https://www.fatsecret.com/recipes/apple-and-sage-pork-chops/Default.aspx"},{"recipe_nutrition":{"protein":"6.04","fat":"6.59","calories":"206","carbohydrate":"33.42"},"recipe_id":"18696","recipe_description":"Try this for a healthy, yummy snack.","recipe_name":"Peanut Butter & Apple Sandwich","recipe_url":"https://www.fatsecret.com/recipes/peanut-butter-and-apple-sandwich/Default.aspx"},{"recipe_nutrition":{"protein":"0.88","fat":"0.36","calories":"146","carbohydrate":"38.89"},"recipe_id":"676","recipe_image":"https://m.ftscrt.com/static/recipe/9216f5c2-b6f6-4b7f-94a9-f69859b7a880.jpg","recipe_description":"Everyone loves this simple compote recipe, from the oldies to the grandchildren.","recipe_name":"Apple and Pear Compote","recipe_url":"https://www.fatsecret.com/recipes/apple-and-pear-compote/Default.aspx"},{"recipe_nutrition":{"protein":"27.42","fat":"3.26","calories":"168","carbohydrate":"5.37"},"recipe_id":"621","recipe_image":"https://m.ftscrt.com/static/recipe/75178bb0-6af4-48b4-82bb-cb0bec02d99c.jpg","recipe_description":"A really delightful sweet chicken dish that the whole family will love.","recipe_name":"Apple and Thyme Chicken","recipe_url":"https://www.fatsecret.com/recipes/apple-and-thyme-chicken/Default.aspx"},{"recipe_nutrition":{"protein":"7.69","fat":"5.62","calories":"199","carbohydrate":"31.16"},"recipe_id":"64","recipe_description":"A terrific combo of oats, nuts, honey, apples, coconut, wheat germ and yogurt to get your day kick started.","recipe_name":"Apple and Coconut Muesli","recipe_url":"https://www.fatsecret.com/recipes/apple-and-coconut-muesli/Default.aspx"},{"recipe_nutrition":{"protein":"9.99","fat":"2.39","calories":"197","carbohydrate":"35.20"},"recipe_id":"10010","recipe_description":"French toast, but low fat.","recipe_name":"Apple-Cinnamon French Toast","recipe_url":"https://www.fatsecret.com/recipes/apple-cinnamon-french-toast-/Default.aspx"},{"recipe_nutrition":{"protein":"4.69","fat":"0.45","calories":"118","carbohydrate":"27.39"},"recipe_id":"117720","recipe_description":"A warm and sweet soup.","recipe_name":"Squash and Apple Curry Soup","recipe_url":"https://www.fatsecret.com/recipes/squash-and-apple-curry-soup/Default.aspx"},{"recipe_nutrition":{"protein":"4.63","fat":"1.61","calories":"341","carbohydrate":"86.07"},"recipe_id":"12179","recipe_description":"A yummy juice packed with vitamins and low on points.","recipe_name":"Carrot, Celery and Apple Juice","recipe_url":"https://www.fatsecret.com/recipes/carrot-celery-and-apple-juice/Default.aspx"},{"recipe_nutrition":{"protein":"2.84","fat":"5.88","calories":"120","carbohydrate":"15.32"},"recipe_id":"2136450","recipe_image":"https://m.ftscrt.com/static/recipe/9805daed-6030-4ff1-9b6a-dbaad2dfc2cf.jpg","recipe_description":"Tantalizing low GI muffins with plenty of goodness but no added sugar.","recipe_name":"No Sugar Oatmeal Apple Muffins","recipe_url":"https://www.fatsecret.com/recipes/no-sugar-oatmeal-apple-muffins/Default.aspx"},{"recipe_nutrition":{"protein":"12.03","fat":"6.32","calories":"148","carbohydrate":"11.01"},"recipe_id":"45331","recipe_description":"Yummy alternative to the fattening pork sausage patties we\'re used to.","recipe_name":"Turkey and Apple Sausage Patties","recipe_url":"https://www.fatsecret.com/recipes/turkey-and-apple-sausage-patties/Default.aspx"}],"max_results":38,"total_results":"71"}}\n'
    // var jsonString1 ='{"recipe":{"number_of_servings":"8","recipe_id":"55986","directions":{"direction":[{"direction_number":"1","direction_description":"Mix all ingredients together and refrigerate."},{"direction_number":"2","direction_description":"Note: use fat free whipped topping, like Cool Whip."}]},"serving_sizes":{"serving":{"fiber":"2.8","calcium":"3","potassium":"202","vitamin_a":"1","vitamin_c":"11","calories":"150","saturated_fat":"3.225","carbohydrate":"29.54","sodium":"64","monounsaturated_fat":"0.254","polyunsaturated_fat":"0.150","protein":"1.42","serving_size":"1 serving","fat":"3.94","cholesterol":"1","iron":"2","trans_fat":"0","sugar":"25.06"}},"recipe_description":"A light version of a favorite salad that\'s quick, easy to make and really yummy.","recipe_types":{"recipe_type":["Side Dish","Dessert"]},"rating":"3","ingredients":{"ingredient":[{"serving_id":"32914","food_name":"Apples","ingredient_url":"https://www.fatsecret.com/calories-nutrition/usda/apples?portionid=32914&portionamount=3.000","measurement_description":"large (3-1/4\\" dia) (approx 2 per lb)","ingredient_description":"3 large golden delicious apples","food_id":"35718","number_of_units":"3.000"},{"serving_id":"43908","food_name":"Pineapple (Drained, Juice Pack, Canned)","ingredient_url":"https://www.fatsecret.com/calories-nutrition/usda/pineapple-(drained-juice-pack-canned)?portionid=43908&portionamount=20.000","measurement_description":"oz","ingredient_description":"20 oz crushed pineapple, drained","food_id":"35989","number_of_units":"20.000"},{"serving_id":"41859","food_name":"Puddings (All Flavors Except Chocolate, Dry Mix, Low Calorie)","ingredient_url":"https://www.fatsecret.com/calories-nutrition/usda/puddings-(all-flavors-except-chocolate-dry-mix-low-calorie)?portionid=41859&portionamount=1.000","measurement_description":"serving","ingredient_description":"1 serving butterscotch instant pudding mix, low fat","food_id":"40818","number_of_units":"1.000"},{"serving_id":"46678","food_name":"Whipped Topping (Low Fat, Frozen)","ingredient_url":"https://www.fatsecret.com/calories-nutrition/usda/whipped-topping-(low-fat-frozen)?portionid=46678&portionamount=8.000","measurement_description":"oz","ingredient_description":"8 oz low fat whipped topping","food_id":"40592","number_of_units":"8.000"}]},"recipe_name":"Taffy Apple Salad","recipe_categories":{"recipe_category":[{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/ingredients/fruit/Default.aspx","recipe_category_name":"Fruit"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/ingredients/fruit/apple/Default.aspx","recipe_category_name":"Apple"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/meal/dessert/Default.aspx","recipe_category_name":"Dessert"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/meal/dessert/fruit/Default.aspx","recipe_category_name":"Fruit Dessert"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/meal/salad/Default.aspx","recipe_category_name":"Salad"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/meal/salad/fruit/Default.aspx","recipe_category_name":"Fruit Salad"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-calorie/Default.aspx","recipe_category_name":"Low Calorie"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-calorie/100-200-calorie/Default.aspx","recipe_category_name":"100-200 Calorie"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-cholesterol/Default.aspx","recipe_category_name":"Low Cholesterol"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-fat/3-5-grams-fat/Default.aspx","recipe_category_name":"3-5 grams Fat"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-sodium/Default.aspx","recipe_category_name":"Low Sodium"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/weight-watchers-points/Default.aspx","recipe_category_name":"Weight Watchers Points"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/weight-watchers-points/3-point/Default.aspx","recipe_category_name":"3 Point"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/weight-watchers-points/low-point/Default.aspx","recipe_category_name":"Low Point"}]},"recipe_url":"https://www.fatsecret.com/recipes/taffy-apple-salad/Default.aspx"}}\n'
    var jsonString2 ='{"recipe":{"number_of_servings":"6","serving_sizes":{"serving":{"fiber":"6.7","calcium":"4","potassium":"331","vitamin_a":"10","vitamin_c":"7","calories":"263","saturated_fat":"0.650","carbohydrate":"55.08","sodium":"83","monounsaturated_fat":"1.330","polyunsaturated_fat":"1.540","protein":"4.79","serving_size":"1 serving","fat":"4.02","cholesterol":"0","iron":"12","trans_fat":"0","sugar":"32.00"}},"cooking_time_min":"30","rating":"4","recipe_url":"https://www.fatsecret.com/recipes/apple-crisp/Default.aspx","recipe_id":"53697","directions":{"direction":[{"direction_number":"1","direction_description":"Peel and slice apples."},{"direction_number":"2","direction_description":"Place in small 6x6\\" baking dish."},{"direction_number":"3","direction_description":"Mix oatmeal, margarine, brown sugar and cinnamon together."},{"direction_number":"4","direction_description":"Top the apples with this mixture."},{"direction_number":"5","direction_description":"Bake at 425 掳F (220 掳C) for approximately 30 minutes or until topping is nicely browned."},{"direction_number":"6","direction_description":"Serve alone or with ice cream."},{"direction_number":"7","direction_description":"Note: add slivered almonds, raisins or walnuts for added flavor."}]},"preparation_time_min":"10","recipe_description":"Delicious sweet baked apple crisp.","recipe_types":{"recipe_type":"Dessert"},"recipe_images":{"recipe_image":"https://m.ftscrt.com/static/recipe/647f989b-a0bf-4511-a4e8-ebd4ce865da2.jpg"},"ingredients":{"ingredient":[{"serving_id":"29574","food_name":"Cinnamon","ingredient_url":"https://www.fatsecret.com/calories-nutrition/usda/cinnamon?portionid=29574&portionamount=1.000","measurement_description":"tbsp","ingredient_description":"1 tbsp cinnamon","food_id":"33872","number_of_units":"1.000"},{"serving_id":"30743","food_name":"Margarine (Vegetable Oil, 20% Fat)","ingredient_url":"https://www.fatsecret.com/calories-nutrition/usda/margarine-(vegetable-oil-20%25-fat)?portionid=30743&portionamount=0.250","measurement_description":"cup","ingredient_description":"1/4 cup margarine","food_id":"34342","number_of_units":"0.250"},{"serving_id":"32915","food_name":"Apples","ingredient_url":"https://www.fatsecret.com/calories-nutrition/usda/apples?portionid=32915&portionamount=6.000","measurement_description":"medium (2-3/4\\" dia) (approx 3 per lb)","ingredient_description":"6 medium apples","food_id":"35718","number_of_units":"6.000"},{"serving_id":"40098","food_name":"Brown Sugar","ingredient_url":"https://www.fatsecret.com/calories-nutrition/usda/brown-sugar?portionid=40098&portionamount=0.500","measurement_description":"cup, packed","ingredient_description":"1/2 cup packed brown sugar","food_id":"39558","number_of_units":"0.500"},{"serving_id":"40321","food_name":"Oats","ingredient_url":"https://www.fatsecret.com/calories-nutrition/usda/oats?portionid=40321&portionamount=1.000","measurement_description":"cup","ingredient_description":"1 cup oatmeal","food_id":"39715","number_of_units":"1.000"}]},"recipe_name":"Apple Crisp","recipe_categories":{"recipe_category":[{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/ingredients/fruit/Default.aspx","recipe_category_name":"Fruit"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/ingredients/fruit/apple/Default.aspx","recipe_category_name":"Apple"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/meal/dessert/Default.aspx","recipe_category_name":"Dessert"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/meal/dessert/cobbler-crisp-and-crumble/Default.aspx","recipe_category_name":"Cobbler, Crisp & Crumble"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/meal/dessert/fruit/Default.aspx","recipe_category_name":"Fruit Dessert"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/high-fiber/Default.aspx","recipe_category_name":"High Fiber"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-calorie/Default.aspx","recipe_category_name":"Low Calorie"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-calorie/200-300-calorie/Default.aspx","recipe_category_name":"200-300 Calorie"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-cholesterol/Default.aspx","recipe_category_name":"Low Cholesterol"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-fat/3-5-grams-fat/Default.aspx","recipe_category_name":"3-5 grams Fat"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/low-sodium/Default.aspx","recipe_category_name":"Low Sodium"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/weight-watchers-points/Default.aspx","recipe_category_name":"Weight Watchers Points"},{"recipe_category_url":"https://www.fatsecret.com/recipes/collections/nutrition/weight-watchers-points/5-point/Default.aspx","recipe_category_name":"5 Point"}]}}}'
    var recipeData = JSON.parse(jsonString2);
    var tempObj1 = recipeData.recipe.ingredients.ingredient;
    var ingredients = [];
    for (var i=0; i<tempObj1.length; i++){
        ingredients.push(tempObj1[i].ingredient_description)
    }
    var tempObj2 = recipeData.recipe.directions.direction;
    var directions = [];
    for (var i=0; i<tempObj2.length; i++){
        directions.push(tempObj2[i].direction_description)
    }




    return (
        <>
            <HomeNavbar />
            <div className="wrapper">
                <FoodSearchHeader />
                <div className="section section-about-us">
                    <Container>
                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">
                            <div style={{marginTop: '-80px'}}>
                                <h2 className='text-lg-center'>
                                    <b>Recipe Name: {recipeData.recipe.recipe_name}</b>
                                </h2>
                            </div>
                            <div style={{width:'50%',float:'left',marginTop:'10px'}}>
                                <div style={{marginLeft:'110px',float:"left"}}>
                                    <div style={divRedStyleLeft}>
                                        <img src={iconPeople} style={{height:'30px',marginLeft:'75px',marginTop:'10px'}} alt=" "/>
                                        <p className='text-center'style={{fontSize:25,fontWeight:'bold',marginTop:'10px'}}>
                                            Yield
                                        </p>
                                        <p className='text-center' style={{fontSize:20,fontWeight:'bold',marginTop:'-20px'}}>
                                            {recipeData.recipe.number_of_servings} Servings
                                        </p>
                                    </div>
                                </div>

                                <div style={{marginLeft:'20px',float:"left"}}>
                                    <div style={divRedStyleLeft}>
                                        <img src={iconClock} style={{height:'30px',marginLeft:'75px',marginTop:'10px'}} alt=" "/>
                                        <p className='text-center'style={{fontSize:25,fontWeight:'bold'}}>
                                            Prep Time
                                        </p>
                                        <p className='text-center' style={{fontSize:20,fontWeight:'bold',marginTop:'-20px'}}>
                                            {recipeData.recipe.preparation_time_min} Mins
                                        </p>
                                        <p className='text-center'style={{fontSize:25,fontWeight:'bold',marginTop:'-20px'}}>
                                            Cook Time
                                        </p>
                                        <p className='text-center' style={{fontSize:20,fontWeight:'bold',marginTop:'-20px'}}>
                                            {recipeData.recipe.cooking_time_min} Mins
                                        </p>



                                    </div>
                                </div>
                                <div style={{marginLeft:'110px',float:"left",marginTop:'20px'}}>
                                    <div style={divRedStyleLeft}>
                                        <img src={iconPlate} style={{height:'30px',marginLeft:'75px',marginTop:'10px'}} alt=" "/>
                                        <p className='text-center'style={{fontSize:25,fontWeight:'bold',marginTop:'10px'}}>
                                            Meal Type
                                        </p>
                                        <p className='text-center' style={{fontSize:20,fontWeight:'bold',marginTop:'-20px'}}>
                                            {recipeData.recipe.recipe_types.recipe_type}
                                        </p>
                                    </div>
                                </div>

                                <div style={{marginLeft:'20px',float:"left",marginTop:'20px'}}>
                                    <div style={divRedStyleLeft}>
                                        <img src={iconStar} style={{height:'30px',marginLeft:'75px',marginTop:'10px'}} alt=" "/>
                                        <p className='text-center'style={{fontSize:25,fontWeight:'bold',marginTop:'10px'}}>
                                            Rating
                                        </p>
                                        <p lassName='text-center' style={{fontWeight:'bold',marginTop:'-10px',marginLeft:'10px'}}>
                                            <font size="10">{parseFloat(recipeData.recipe.rating).toFixed(1)}</font> out of 5
                                        </p>
                                    </div>
                                </div>

                            </div>


                            <div style={{width:'50%',float:'left',marginTop:'10px'}}>
                                <div style={divRedStyle1}>
                                    <div style={titleStyle}></div>
                                    <div style={middleOutStyle}>
                                        <div style={middleStyle1}>
                                            Energy
                                        </div>
                                        <div style={middleStyle2}>
                                            {recipeData.recipe.serving_sizes.serving.calories} kcal
                                        </div>
                                    </div>
                                    <div style={bottomStyle}></div>
                                </div>

                                <div style={divRedStyle2}>
                                    <div style={titleStyle}></div>
                                    <div style={middleOutStyle}>
                                        <div style={middleStyle1}>
                                            Carb
                                        </div>
                                        <div style={middleStyle2}>
                                            {recipeData.recipe.serving_sizes.serving.calories} kcal
                                        </div>
                                    </div>
                                    <div style={bottomStyle}></div>
                                </div>

                                <br></br>
                                <div style={divRedStyle3}>
                                    <div style={titleStyle}></div>
                                    <div style={middleOutStyle}>
                                        <div style={middleStyle1}>
                                            Port
                                        </div>
                                        <div style={middleStyle2}>
                                            {recipeData.recipe.serving_sizes.serving.protein} g
                                        </div>
                                    </div>
                                    <div style={bottomStyle}></div>
                                </div>

                                <div style={divRedStyle4}>
                                    <div style={titleStyle}></div>
                                    <div style={middleOutStyle}>
                                        <div style={middleStyle1}>
                                            Fat
                                        </div>
                                        <div style={middleStyle2}>
                                            {recipeData.recipe.serving_sizes.serving.fat} g
                                        </div>
                                    </div>
                                    <div style={bottomStyle}></div>
                                </div>
                            </div>
                            <Row style={{width:'100%', marginLeft:'80px'}}>
                                <br></br><br></br>
                            </Row>

                            <p style={{lineHeight:0}}>
                                <br></br>
                            </p>
                            <div align='center' style={{width:'50%',float:'left'}}>
                                <img src={recipeData.recipe.recipe_images.recipe_image} alt=" " style={{marginLeft:'40px',width:'300px',height:'300px'}}/>
                            </div>

                            <div style={{width:'50%',float:'left'}}>
                                <h2 style={{marginLeft:'80px'}}>
                                    <b>Ingredients:</b>
                                </h2>
                                <div style={{fontSize: 20,marginLeft:'80px'}}>
                                    {ingredients.map(item => (
                                        <li key = {item}>{item}</li>
                                    ))}
                                </div>
                            </div>

                            <Row style={{width:'100%', marginLeft:'80px'}}>
                                <h2>
                                    <br></br>
                                    <b>Description</b>
                                </h2>
                                <div style={{fontSize: 20}}>
                                    {directions.map(item => (
                                        <li key = {item}>{item}</li>
                                    ))}
                                </div>
                            </Row>
                        </div>
                        <button className="text-lg-center"
                                style={{backgroundColor:'rgba(128,1,255,0.66)',marginLeft:'45%',
                                    borderRadius:'25px',fontSize:15,color:'white',height:45,borderWidth:0}}>
                            Back to Search Page
                        </button>

                    </Container>
                </div>
                <DefaultFooter />
            </div>
        </>

    );
}
export default FoodDetailsPage;
