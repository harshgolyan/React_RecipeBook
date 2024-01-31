import { Card, Button, Modal } from "react-bootstrap";
import Styles from "./Recipe.module.css";
import { useState } from "react";


const Recipe = (props) => {
  console.log(props.recipelist.recipe.ingredients)
  const [showModal, setShowModal] = useState(false);

  const handleSeeRecipe = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  
  return <>    
    <div className={Styles.recipe}>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ width: "100%"}} variant="top" src={props.recipelist.recipe.image} />
        <Card.Body>
          <Card.Title className={Styles["recipe-title"]} >{props.recipelist.recipe.label}</Card.Title>
          <Button variant="primary" className={Styles["recipe-button"]} onClick={handleSeeRecipe}>
            See the Recipe
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.recipelist.recipe.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
  
            <div style={{ flex: 1 }}>
              <img src={props.recipelist.recipe.image} alt={props.recipelist.recipe.label} style={{ width: "100%" }} />
            </div>


            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
              <h3>Ingredients</h3>
              </div>
              
              <div>   
              <ul>
                {props.recipelist.recipe.ingredients.map(ingredient => (
                <li key={Math.random()}>{ingredient.text}</li>
                ))}
              </ul>
              </div>

            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    </>

};

export default Recipe;


