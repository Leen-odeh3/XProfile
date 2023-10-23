import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://65364c04c620ba9358ed4590.mockapi.io/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <input
        className="searchAccount"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="main-content" style={{ backgroundColor: "white" }}>
        {users
          .filter((user) =>
            user.username.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <div key={user.id} className="item">
              <div
                className="bg-color"
                style={{ backgroundColor: `${user.banner_color}` }}
              >
                <div className="info" style={{ backgroundColor: "black" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={`https://avatars.githubusercontent.com/${user.name.replace(
                        /\s+/g,
                        "-"
                      )}`}
                      alt="imgAccount"
                      className="profile-img"
                    />
                    <h3>{user.name}</h3>
                    <Link to="" style={{ color: "white" }}>
                      @{user.username}
                    </Link>
                  </div>
                  <p style={{ fontSize: "20px", margin: "30px 20px" }}>
                    {user.about}
                  </p>
                  <div style={{ margin: "auto", textAlign: "center" }}>
                    <button className="btn">
                      Follow on
                      <i className="bi bi-github"></i>
                    </button>
                    <button>
                      follow on
                      <i className="bi bi-twitter-x"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
