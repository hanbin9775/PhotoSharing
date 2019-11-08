import React, { Component } from "react";
import "./navbar.css";
import ReactDOM from "react-dom";
// import disableScroll from 'disable-scroll';
import { HashRouter } from "react-router-dom";
import { Link as Link2 } from "react-router-dom";
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll";
/* App.jsx */
class NAV extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick(val) {
    this.setState({ menuOpen: false });

    if (val === "Introduce Members") {
      window.location.href = "#/company";
      window.scrollTo(0, 0);
    } else if (val === "Directoty") {
      window.location.href = "#/press";
      window.scrollTo(0, 0);
    } else if (val === "Upload") {
      window.location.href = "#/relations";
      window.scrollTo(0, 0);
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 10,
        left: 0,
        zIndex: "9999",
        opacity: 1,
        display: "flex",
        alignItems: "center",
        background: "white",
        width: "100%",
        color: "white",
        fontFamily: "Lobster"
      },
      logo: {
        margin: "0 auto",
        padding: "0px 47px 0 0",
        color: "black"
      }
    };
    const menu = ["Introduce Members", "Directoty", "Upload"];
    const menuItems = menu.map((val, index) => {
      return (
        <div>
          <MenuItem
            key={index}
            delay={`${index * 0.1}s`}
            onClick={() => {
              this.handleLinkClick(val);
            }}
          >
            {val}
          </MenuItem>
        </div>
      );
    });

    return (
      <HashRouter>
        <div>
          <div style={styles.container}>
            ""
            <MenuButton
              open={this.state.menuOpen}
              onClick={() => this.handleMenuClick()}
              color="black"
            />
            <a href="/" style={styles.logo}>
              <img
                src={require("./images/uchu_logo.png")}
                width={150}
                alt="header-logo"
              />
              <br />
              <br />
            </a>
          </div>
          <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        </div>
      </HashRouter>
    );
  }
}

/* MenuItem.jsx*/
class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay,
        width: "100vw"
      },
      menuItem: {
        fontFamily: `'Acumin', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        cursor: "pointer",
        color: "black",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay,
        textAlign: "left",
        marginLeft: "7%"
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay
      }
    };
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

/* Menu.jsx */
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100vh" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "white",
        opacity: 1,
        color: "#fafafa",
        transition: "height 0.7s ease",
        zIndex: 2
      },
      menuList: {
        paddingTop: "3rem"
      }
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

/* MenuButton.jsx */
class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: "32px",
        width: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // cursor: 'pointer',
        padding: "4px"
      },
      line: {
        height: "2px",
        width: "20px",
        background: this.state.color,
        transition: "all 0.2s ease"
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px"
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none"
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px"
      }
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

/* Main.jsx */
class Main extends Component {
  render() {
    const styles = {
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh"
      }
    };

    return (
      <div style={styles.main}>
        <NAV />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.querySelector("#root"));

export default NAV;
