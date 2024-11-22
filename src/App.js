import "./App.css";
import Board from "./components/Board";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Cards1 from "./components/Cards1";
import datas from "./datas/projectdata.json";

function App() {
  return (
    <div>
      <Board></Board>
      <navbar className="nav-head">
        <a>
          <img
            className="dt-logo"
            src="https://deepthought.education/assets/images/logo/logo.svg"
            alt="dt-logo"
          />
        </a>
        <ul className="nav-items">
          <li>
            <a href="">
              <img
                src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/home-circle-blue-512.png"
                alt="home"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/tools-circle-blue-1024.png"
                alt="setting"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png"
                alt="notification"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="https://s3-alpha-sig.figma.com/img/7ac8/5301/b9bfc59f733c9f17f2bede82c41154f1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FDrn5X6rUoVywpf-PO~sTzhn1E~UKImyM02q9x20Hj5FH92hpg2ioiUu07ek3ztZ5Mb3KReqz-vXWhpHcPjM02aoUCQOL8NHBl5RVwrEnuEZhEbFE3Zu5030ySQzx6TDvxcUlu~ACS26XRFn~3npAYA4k-4zP6YHPnxeFYm9lJ66RTKgciO0ZOHap3TWHNGzi5YTLaMLZS5zPs5J0L8KXXIvj1qQhNJZVFel6IwBN-P920VNnApAdL80SUyrz~w6bDzuTerCMkiDG~EWd9yc5XOwa1reSzgTA3Zq883Zs776b2bc9uHbe3tL2-Li-fS5XbxF-aVFf-S3Kpw4No7ceg__"
                alt="profile"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4992/4992717.png"
                alt="menu"
              />
            </a>
          </li>
        </ul>
      </navbar>
      <section className="home">
        
        <div className="heading">
          <h2>Technical project management</h2>
          <button className="submit-btn">submit task</button>
        </div>
        <div className="title-description">
          <h1>Explore the world of managemenet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            eum aperiam quibusdam beatae at reiciendis quaerat, neque ullam
            totam ducimus iste quas distinctio qui, consequatur tenetur est nisi
            rerum nam amet officiis. Nemo!
          </p>
        </div>
        <div class="container-cards">

        
        <Cards1
          cardTitle={datas.tasks[0].assets[0].asset_title}
          cardDesc={datas.tasks[0].assets[0].asset_description}
          cardVid={datas.tasks[0].assets[0].asset_content}
        ></Cards1>
        <Card2
          cardTitle={datas.tasks[0].assets[1].asset_title}
          cardDesc={datas.tasks[0].assets[1].asset_description}
        ></Card2>
        <Card3
          cardTitle={datas.tasks[0].assets[2].asset_title}
          cardDesc={datas.tasks[0].assets[2].asset_description}
        ></Card3>
        <Card4
          cardTitle={datas.tasks[0].assets[3].asset_title}
          cardDesc={datas.tasks[0].assets[3].asset_description}
        ></Card4>
        </div>
      </section>
    </div>
  );
}

export default App;
