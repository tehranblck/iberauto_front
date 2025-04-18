import Link from "next/link";

const BlogDetails = () => {
  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7">
            <div className="blog-details-card">
              <div className="blog-thumb">
                <img src="assets/img/blog/blog_details1_1.png" alt="Fixturbo" />
                <div className="blog-meta">
                  <Link href="/blog-details">
                    <i className="far fa-comments" />
                    Comments (05)
                  </Link>
                  <Link href="/blog">
                    <i className="far fa-user" />
                    By admin
                  </Link>
                </div>
                <Link href="/blog-details" className="blog-date">
                  15 DEC
                </Link>
              </div>
              <div className="blog-content">
                <h2 className="blog-title h3">
                  Bütün Ehtiyaclarınız üçün Dam Təmirçiləriniz{" "}
                </h2>
                <p className="mb-15">
                  Səhifənin oxunaqlı məzmunu oxucunu diqqətindən yayındırır. Lorem Ipsum istifadəsinin məqsədi ondan ibarətdir ki, o, 'Content here, content here' istifadə etməkdən fərqli olaraq, təxminən normal hərf paylanmasına malikdir.
                </p>
                <p>
                  Səhifənin oxunaqlı məzmunu oxucunu diqqətindən yayındırır. Lorem Ipsum istifadəsinin məqsədi ondan ibarətdir ki, o, təxminən normal hərf paylanmasına malikdir.
                </p>
                <blockquote>
                  <p>
                    Lorem Ipsum çap və dizayn sənayesinin sadəcə dummy mətni idi. Lorem Ipsum 1500-cü illərdən bəri sənayenin standart dummy mətni olmuşdur, naməlum çapçı bir qalley tipini götürüb və Lorem Ipsum dummy mətni yaratmaq üçün qarışdırmışdır.
                  </p>
                  <cite>Robert Fox</cite>
                </blockquote>
                <p className="mb-40">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when thr looking at its
                  layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal the a distribution of letters, as opposed
                  to using 'Content her the design made by man who is jenius
                </p>
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="blog-thumb mb-sm-0 mb-30">
                      <img
                        src="assets/img/blog/blog_details1_2.png"
                        alt="Fixturbo"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-details-single-card bg-title">
                      <h4 className="text-white">
                        Roofing Contractor All Your{" "}
                      </h4>
                      <p className="text-white">
                        It is a long established fact that a reader will be
                        distracted the readable content of a page a whe looking
                        at its layout It is a established fact that a reader the
                        main man
                      </p>
                      <p className="text-white mb-n2">
                        It is a long established fact that a reader will be
                        distracted the readable content
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="blog-inner-title mt-70">
                  Your Go-To Roofing Contractors for All Your{" "}
                </h3>
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <div className="checklist style2">
                      <ul>
                        <li>
                          <i className="fas fa-check-circle" />
                          Professional Car Repair Services Dependable Car
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Dependable Car Repair Solutions
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Your One-Stop Car Repair Shop
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checklist style2">
                      <ul>
                        <li>
                          <i className="fas fa-check-circle" />
                          Professional Car Repair Services Dependable Car
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Dependable Car Repair Solutions
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Your One-Stop Car Repair Shop
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="mt-40">
                  A car repair is a service provided to fix any issues or
                  damages with your vehicle. It involves diagnosing the problem,
                  repairing or replacing the necessary parts, and ensuring that
                  the car is in proper working condition A car repair is a
                  service provided to fix any issues or damages with your
                  vehicle. It involves diagnosing{" "}
                </p>
              </div>
              <div className="share-links clearfix ">
                <span className="share-links-title">Tags:</span>
                <div className="tagcloud">
                  <Link href="/blog">All Project</Link>
                  <Link href="/blog">Car Repair</Link>
                  <Link href="/blog">Repair Services</Link>
                </div>
              </div>
            </div>
            <div className="comments-wrap">
              {/* Comment Form */}
              <h3 className="blog-inner-title"> Leave a comment</h3>
              <div className="comment-form bg-smoke mb-30">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <select
                      name="subject"
                      id="subject"
                      className="form-select style-white"
                      defaultValue={"Choose"}
                    >
                      <option value="Choose" >
                        Select Subject*
                      </option>
                      <option value="Construction">Auto Repair</option>
                      <option value="Real Estate">Car Repair</option>
                      <option value="Industry">Automotive</option>
                    </select>
                    <i className="fas fa-angle-down" />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Mesajınızı buraya yazın.."
                      className="form-control style-white"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="btn style2">İndi Göndər</button>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Comment end */}
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <h3 className="widget_title">Axtar</h3>
                <form className="search-form">
                  <input type="text" placeholder="Axtar" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Category</h3>
                <ul>
                  <li>
                    <Link href="/blog">
                      Precision Auto Works <span>(4)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Mobile Car Repair <span>(5)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Elite Automotive Service <span>(8)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Pro Auto Fix <span>(4)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Drive-In Garage <span>(3)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h3 className="widget_title">Popular post</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="/blog-details">
                          Quick Fix Motors
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="/blog">Sep 15, 2024</Link>
                      </div>
                    </div>
                    <div className="media-img">
                      <Link href="/blog-details">
                        <img
                          src="assets/img/blog/recent-post1.png"
                          alt="Fixturbo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="/blog-details">
                          Professional Service
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="/blog">Jun 25, 2024</Link>
                      </div>
                    </div>
                    <div className="media-img">
                      <Link href="/blog-details">
                        <img
                          src="assets/img/blog/recent-post2.png"
                          alt="Fixturbo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="/blog-details">
                          Gear Wrench Auto
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="/blog">Jun 25, 2024</Link>
                      </div>
                    </div>
                    <div className="media-img">
                      <Link href="/blog-details">
                        <img
                          src="assets/img/blog/recent-post3.png"
                          alt="Fixturbo"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Tags</h3>
                <div className="tagcloud">
                  <Link href="/blog">Mechanic</Link>
                  <Link href="/blog">Car Fix</Link>
                  <Link href="/blog">Auto Fixers</Link>
                  <Link href="/blog">Pro Auto Fix</Link>
                  <Link href="/blog">Service</Link>
                  <Link href="/blog">Auto Fix</Link>
                  <Link href="/blog">Auto Repair</Link>
                  <Link href="/blog">Masters</Link>
                  <Link href="/blog">Automotive</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
