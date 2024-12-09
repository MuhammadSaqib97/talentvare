import React from "react";
import User from "../../images/user_cover_profile_01.svg";
import Profile from "../../images/profile_user_circle01.svg";
import Search from "../../images/search_icon.svg";
import Arrow from "../../images/arrow__icon01.svg";
import Icon_Title from "../../images/icon__title.svg";
import Clock from "../../images/clock_icon.svg";
import Location from "../../images/loction_icon.svg";
import Save from "../../images/post_save_icon.svg";
import { Link } from "react-router-dom";
import { JobData } from "../../data";

const Home = () => {
  return (
    <>
      <section className="main__Sec__center">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="user__profile__box">
                <div className="cover__user">
                  <img src={User} className="img-reponsive" alt="Cover" />
                </div>

                <div className="profile__data__name">
                  <div className="profile__circle">
                    <img
                      src={Profile}
                      className="img-reponsive"
                      alt="profile"
                    />
                  </div>

                  <div className="user_name__app">
                    <h2>Albert Flores</h2>
                    <ul>
                      <li>Senior Product Designer</li>
                      <li>UI/UX Designer</li>
                      <li>Graphic Designer</li>
                      <li>Web...</li>
                    </ul>
                    <h5>Clinton, Maryland</h5>
                  </div>
                </div>
              </div>

              <div className="profile__links">
                <ul>
                  <li>
                    Profile Visitors <span>140</span>
                  </li>
                  <li>
                    Resume Viewers <span>20</span>
                  </li>
                  <li>
                    My Jobs <span>88</span>
                  </li>
                </ul>
              </div>

              <div className="upcomming__event">
                <h2>My calendar</h2>
                <p>Upcoming Interviews</p>
                <img
                  src={Arrow}
                  className="img-reponsive arrow__event"
                  alt="arrow"
                />
              </div>
            </div>

            <div className="col-sm-9">
              <div className="name__des">
                <h2>
                  Find your Dream Job, <span>Albert!</span>
                </h2>
                <p>
                  Explore the latest job openings and apply for the best
                  opportunities available today!
                </p>
              </div>

              <div className="job__search">
                <div className="search__input__job">
                  <input
                    type="text"
                    name="text"
                    className="input_search"
                    placeholder="Job Title, Company, or Keywords"
                  />
                </div>

                <div className="select__location">
                  <select className="option__select">
                    <option name="Select Location">Select Location</option>
                    <option name="Select Location">Select Location</option>
                    <option name="Select Location">Select Location</option>
                    <option name="Select Location">Select Location</option>
                  </select>
                </div>

                <div className="select__type">
                  <select className="option__select">
                    <option name="Job Type">Job Type</option>
                    <option name="Job Type">Job Type</option>
                    <option name="Job Type">Job Type</option>
                    <option name="Job Type">Job Type</option>
                  </select>
                </div>

                <div className="search__btn">
                  <button>
                    <img src={Search} className="img-reponsive" alt="Search" />
                    Search
                  </button>
                </div>
              </div>

              <div className="tags__box">
                <span>Similar:</span>
                <ul className="tags__but">
                  <li>
                    <Link to="#">Frontend</Link>
                  </li>
                  <li>
                    <Link to="#">Backend</Link>
                  </li>
                  <li>
                    <Link to="#">Graphic Designer</Link>
                  </li>
                </ul>
              </div>

              <div className="job_box__app">
                <div className="post__job__heading">
                  <h4>Featured Jobs </h4>
                  <Link to="#">See Featured Jobs</Link>
                </div>

                <div className="Job__box">
                  <div className="row">
                    {JobData.map((job) => (
                      <div className="col-sm-3" key={job.id}>
                        <div className="box__applied__box">
                          <span>Promoted</span>
                          <div className="title__icon">
                            <div className="icon__job">
                              <img src={Icon_Title} className="img-reponsive" alt="title" />
                            </div>
                            <div className="tile__des">
                              <h3>{job.title}</h3>
                              <h6>{job.team}</h6>
                            </div>
                          </div>
                          <div className="job__listing__list">
                            <ul>
                              <li>
                                <img src={Location} className="img-reponsive" alt="Location" />
                                {job.location}
                              </li>
                              <li>
                                <img src={Clock} className="img-reponsive" alt="Clock" />
                                {job.timeAgo} | <span>{job.applicants} applicants</span>
                              </li>
                            </ul>
                          </div>
                          <div className="apply_btn">
                            <div className="btn__app">
                              <button>Apply Now</button>
                            </div>
                            <div className="post_save_icon">
                              <img src={Save} className="img-reponsive" alt="saved" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="job_box__app">
                <div className="post__job__heading">
                  <h4>Recommended Jobs </h4>
                  <Link to="#">See Recommended Jobs</Link>
                </div>

                <div className="Job__box">
                  <div className="row">
                    {JobData.map((job) => (
                        <div className="col-sm-3" key={job.id}>
                            <div className="box__applied__box">
                            <span>Promoted</span>
                            <div className="title__icon">
                                <div className="icon__job">
                                    <img src={Icon_Title} className="img-reponsive" alt="title" />
                                </div>
                                <div className="tile__des">
                                    <h3>{job.title}</h3>
                                    <h6>{job.team}</h6>
                                </div>
                            </div>
                            <div className="job__listing__list">
                                <ul>
                                <li>
                                    <img src={Location} className="img-reponsive" alt="Location" />
                                    {job.location}
                                </li>
                                <li>
                                    <img src={Clock} className="img-reponsive" alt="Clock" />
                                    {job.timeAgo} | <span>{job.applicants} applicants</span>
                                </li>
                                </ul>
                            </div>
                            <div className="apply_btn">
                                <div className="btn__app">
                                    <button>Apply Now</button>
                                </div>
                                <div className="post_save_icon">
                                    <img src={Save} className="img-reponsive" alt="saved" />
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
