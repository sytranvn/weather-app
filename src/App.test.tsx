import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { container } = render(<App />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <section
        class="vh-100"
        style="background-color: rgb(238, 238, 238);"
      >
        <header>
          <nav
            class="navbar navbar-expand-md navbar-dark bg-dark"
          >
            <div
              class="container"
            >
              <a
                class="navbar-brand"
                href="/"
              >
                YAWA
              </a>
              <button
                aria-controls="responsive-navbar-nav"
                aria-label="Toggle navigation"
                class="navbar-toggler collapsed"
                type="button"
              >
                <span
                  class="navbar-toggler-icon"
                />
              </button>
              <div
                class="navbar-collapse collapse"
                id="responsive-navbar-nav"
              >
                <div
                  class="me-auto navbar-nav"
                >
                  <form
                    class=""
                  >
                    <div
                      class="input-group"
                    >
                      <input
                        aria-label="City"
                        class="mr-2 form-control"
                        placeholder="City"
                        type="search"
                      />
                      <button
                        aria-label="search"
                        class="btn btn-primary"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="svg-inline--fa fa-search fa-w-16 "
                          data-icon="search"
                          data-prefix="fas"
                          focusable="false"
                          role="img"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="navbar-nav"
                >
                  <a
                    class="nav-link"
                    data-rr-ui-event-key="https://www.metaweather.com/"
                    href="https://www.metaweather.com/"
                  >
                    Powered by MetaWeather
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div
          class="container-md"
        >
          <div
            class="d-flex justify-content-center align-items-center h-100 row"
          >
            <div
              class="col"
            >
              <div
                class="mb-3 card"
                style="border-radius: 10px;"
              >
                <div
                  class="bg-image ripple"
                  data-mdb-ripple-color="light"
                  style="border-top-left-radius: 10px; border-top-right-radius: 10px;"
                >
                  <img
                    alt="night"
                    class="w-100"
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-weather/draw2.png"
                  />
                  <div
                    class="sc-bdfBQB dmWvDr"
                  >
                    <div
                      class="d-flex justify-content-between p-4"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-chevron-left fa-w-10 fa-lg text-white"
                        data-icon="chevron-left"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 320 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-cog fa-w-16 fa-lg text-white"
                        data-icon="cog"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      class="text-center text-white"
                    >
                      <p
                        class="h4 mb-4"
                      >
                        Clear night
                      </p>
                      <p
                        class="h6 mb-4"
                      >
                        Detroit, US
                      </p>
                      <p
                        class="display-5"
                      >
                        <strong>
                          20°C
                        </strong>
                         
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="card-body p-4 text-center"
                >
                  <div
                    class="d-flex justify-content-between mb-3"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Max
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-sun pe-2"
                      />
                       23°C
                    </p>
                  </div>
                  <div
                    class="d-flex justify-content-between"
                    style="color: rgb(170, 170, 170);"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Min
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-cloud pe-2"
                      />
                       21°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col"
            >
              <div
                class="mb-3 card"
                style="border-radius: 10px;"
              >
                <div
                  class="bg-image ripple"
                  data-mdb-ripple-color="light"
                  style="border-top-left-radius: 10px; border-top-right-radius: 10px;"
                >
                  <img
                    alt="night"
                    class="w-100"
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-weather/draw2.png"
                  />
                  <div
                    class="sc-bdfBQB dmWvDr"
                  >
                    <div
                      class="d-flex justify-content-between p-4"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-chevron-left fa-w-10 fa-lg text-white"
                        data-icon="chevron-left"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 320 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-cog fa-w-16 fa-lg text-white"
                        data-icon="cog"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      class="text-center text-white"
                    >
                      <p
                        class="h4 mb-4"
                      >
                        Clear night
                      </p>
                      <p
                        class="h6 mb-4"
                      >
                        Detroit, US
                      </p>
                      <p
                        class="display-5"
                      >
                        <strong>
                          20°C
                        </strong>
                         
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="card-body p-4 text-center"
                >
                  <div
                    class="d-flex justify-content-between mb-3"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Max
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-sun pe-2"
                      />
                       23°C
                    </p>
                  </div>
                  <div
                    class="d-flex justify-content-between"
                    style="color: rgb(170, 170, 170);"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Min
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-cloud pe-2"
                      />
                       21°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col"
            >
              <div
                class="mb-3 card"
                style="border-radius: 10px;"
              >
                <div
                  class="bg-image ripple"
                  data-mdb-ripple-color="light"
                  style="border-top-left-radius: 10px; border-top-right-radius: 10px;"
                >
                  <img
                    alt="night"
                    class="w-100"
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-weather/draw2.png"
                  />
                  <div
                    class="sc-bdfBQB dmWvDr"
                  >
                    <div
                      class="d-flex justify-content-between p-4"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-chevron-left fa-w-10 fa-lg text-white"
                        data-icon="chevron-left"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 320 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-cog fa-w-16 fa-lg text-white"
                        data-icon="cog"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      class="text-center text-white"
                    >
                      <p
                        class="h4 mb-4"
                      >
                        Clear night
                      </p>
                      <p
                        class="h6 mb-4"
                      >
                        Detroit, US
                      </p>
                      <p
                        class="display-5"
                      >
                        <strong>
                          20°C
                        </strong>
                         
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="card-body p-4 text-center"
                >
                  <div
                    class="d-flex justify-content-between mb-3"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Max
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-sun pe-2"
                      />
                       23°C
                    </p>
                  </div>
                  <div
                    class="d-flex justify-content-between"
                    style="color: rgb(170, 170, 170);"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Min
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-cloud pe-2"
                      />
                       21°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col"
            >
              <div
                class="mb-3 card"
                style="border-radius: 10px;"
              >
                <div
                  class="bg-image ripple"
                  data-mdb-ripple-color="light"
                  style="border-top-left-radius: 10px; border-top-right-radius: 10px;"
                >
                  <img
                    alt="night"
                    class="w-100"
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-weather/draw2.png"
                  />
                  <div
                    class="sc-bdfBQB dmWvDr"
                  >
                    <div
                      class="d-flex justify-content-between p-4"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-chevron-left fa-w-10 fa-lg text-white"
                        data-icon="chevron-left"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 320 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-cog fa-w-16 fa-lg text-white"
                        data-icon="cog"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      class="text-center text-white"
                    >
                      <p
                        class="h4 mb-4"
                      >
                        Clear night
                      </p>
                      <p
                        class="h6 mb-4"
                      >
                        Detroit, US
                      </p>
                      <p
                        class="display-5"
                      >
                        <strong>
                          20°C
                        </strong>
                         
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="card-body p-4 text-center"
                >
                  <div
                    class="d-flex justify-content-between mb-3"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Max
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-sun pe-2"
                      />
                       23°C
                    </p>
                  </div>
                  <div
                    class="d-flex justify-content-between"
                    style="color: rgb(170, 170, 170);"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Min
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-cloud pe-2"
                      />
                       21°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col"
            >
              <div
                class="mb-3 card"
                style="border-radius: 10px;"
              >
                <div
                  class="bg-image ripple"
                  data-mdb-ripple-color="light"
                  style="border-top-left-radius: 10px; border-top-right-radius: 10px;"
                >
                  <img
                    alt="night"
                    class="w-100"
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-weather/draw2.png"
                  />
                  <div
                    class="sc-bdfBQB dmWvDr"
                  >
                    <div
                      class="d-flex justify-content-between p-4"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-chevron-left fa-w-10 fa-lg text-white"
                        data-icon="chevron-left"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 320 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-cog fa-w-16 fa-lg text-white"
                        data-icon="cog"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      class="text-center text-white"
                    >
                      <p
                        class="h4 mb-4"
                      >
                        Clear night
                      </p>
                      <p
                        class="h6 mb-4"
                      >
                        Detroit, US
                      </p>
                      <p
                        class="display-5"
                      >
                        <strong>
                          20°C
                        </strong>
                         
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="card-body p-4 text-center"
                >
                  <div
                    class="d-flex justify-content-between mb-3"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Max
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-sun pe-2"
                      />
                       23°C
                    </p>
                  </div>
                  <div
                    class="d-flex justify-content-between"
                    style="color: rgb(170, 170, 170);"
                  >
                    <p
                      class="h6 fw-normal"
                    >
                      Min
                    </p>
                    <p
                      class="h6 fw-normal"
                    >
                      <i
                        class="fas fa-cloud pe-2"
                      />
                       21°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer
            class="bg-light text-center text-lg-start"
          >
            <div
              class="text-center p-3"
            >
              © 
              2021
               Copyright:
              <a
                class="text-dark"
                href="https://sytranvn.dev/"
              >
                sytranvn.dev
              </a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  `)
})
