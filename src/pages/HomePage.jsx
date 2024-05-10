import { useEffect } from "react";
import { Button, Container, Row, Image, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//mport BlogPosts from "../components/BlogPosts";
import { useCookies } from "react-cookie";

// Landing Page
export default function HomePage() {
  // Initializes state variables using the useCookies hook, specifically fetching the JWT token from cookies.
  const [cookies, setCookie] = useCookies(['jwt']);  
  const authToken = cookies.jwt; // Retrieve JWT token from cookies
  const navigate = useNavigate();
  const heroPict = "../assets/hero-hotel-pict.jpg";
  const pic =
  "https://pbs.twimg.com/profile_images/1587405892437221376/h167Jlb2_400x400.jpg";

  /* The useEffect hook runs when the component mounts or when the authToken value changes. 
  If there's no authentication token (authToken is falsy), it navigates the user to the login page.
  */
  useEffect(() => {
    if (!authToken  || cookies == null) navigate("/login");
  }, [authToken, cookies, navigate]);

  /* This function handles the logout action.
It checks if a JWT token exists in cookies. 
If it does, it sets the JWT cookie to null effectively removing it.
Then, it navigates the user to the login page.
  */
  const handleLogout  =  () => {
    if (cookies.jwt) {
      // set the JWT cookie to null
      setCookie('jwt', null);
      console.log('jwt logout',cookies);
    }   
    navigate("/login");
  };

  /*Inside the row, it renders the BlogPosts component, 
  passing the handleLogout function as a prop.
  */
  return (
    <Container>
    <Row>
    <Col sm={6} className="bg-light" style={{ border: "1px solid lightgrey" }}>
      <Image src={heroPict} fluid />
      <br />
      <Image
        src={pic}
        roundedCircle
        style={{
          width: 150,
          position: "absolute",
          top: "140px",
          border: "4px solid #F8F9FA",
          marginLeft: 15,
        }}
      />

      <Row className="justify-content-end">
        <Col xs="auto">
          <Button className="rounded-pill mt-2" variant="outline-secondary"  handleLogout={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>


      <p
        className="mt-5"
        style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}
      >
        Haris
      </p>
      <p style={{ marginBottom: "2px" }}>@haris.samingan</p>
      <p>
        I help people switch careers to be a software developer at
        sigmaschool.co
      </p>
      <p>Entrepreneur</p>
      <p>
        <strong>271</strong> Following <strong>610</strong> Followers
      </p>
      
    </Col>
    </Row>
  </Container>  
  );
}


