import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';
import Trending from '@material-ui/icons/TrendingUp';
import Sticker from '@material-ui/icons/Message';
import Translate from '@material-ui/icons/Translate';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const drawerWidth = 240;
const GiphyLogo = styled.div`
  height: 54px;
  background-image: url(poweredbyGiphy.gif);
  background-size: cover;
  width: 41px;
`;
const styles = theme => {
  return {
    root: {
      width: '100%'
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginTop: -4
    },
    title: {
      color: 'initial',
      display: 'none',
      fontStyle: 'italic',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      },
      fontWeight: 'lighter'
    },
    normalText: {
      fontStyle: 'italic',
      color: 'black',
      fontWeight: 'lighter',
      margin: 'auto'
    },
    search: {
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      width: '100%',
      minWidth: '200px',
      [theme.breakpoints.up('sm')]: {
        width: 'auto'
      },
      boxShadow:
        '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
      borderRadius: '24px',
      alignItems: 'center',
      display: 'flex'
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200
      },
      fontWeight: 'lighter',
      fontStyle: 'italic',
      color: 'white'
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    extendedIcon: {
      marginRight: theme.spacing.unit
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    },
    span: {
      display: 'flex',
      height: '35px',
      justifyContent: 'flex-end',
      margin: 'auto'
    },
    link: {
      textDecoration: 'none'
    },
    appBarRoot: {},
    fabButtonRoot: {
      margin: theme.spacing.unit
    }
  };
};

class AppBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.googleInput = React.createRef();
    this.state = { mobileOpen: false };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, onSearch, text, onCloseIconClick } = this.props;
    const { mobileOpen } = this.state;
    const drawer = (
      <div>
        <Link to="/" className={classes.link} onClick={this.handleDrawerToggle}>
          <Fab variant="extended" size="medium" aria-label="Add" className={classes.fabButtonRoot}>
            <Home className={classes.extendedIcon} />
            Home
          </Fab>
        </Link>
        <Link to="/trending" className={classes.link} onClick={this.handleDrawerToggle}>
          <Fab variant="extended" size="medium" aria-label="Add" className={classes.fabButtonRoot}>
            <Trending className={classes.extendedIcon} />
            Trending
          </Fab>
        </Link>
        <Link to="/sticker" className={classes.link} onClick={this.handleDrawerToggle}>
          <Fab variant="extended" size="medium" aria-label="Add" className={classes.fabButtonRoot}>
            <Sticker className={classes.extendedIcon} />
            Stickers
          </Fab>
        </Link>
        <Link to="/translate" className={classes.link} onClick={this.handleDrawerToggle}>
          <Fab variant="extended" size="medium" aria-label="Add" className={classes.fabButtonRoot}>
            <Translate className={classes.extendedIcon} />
            Translate
          </Fab>
        </Link>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar position="static" classes={{ root: classes.appBarRoot }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              color="primary"
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
            <span className={classes.span}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search gif..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputRef={input => {
                    this.searchField = input;
                  }}
                  onKeyPress={e => {
                    const {
                      target: { value }
                    } = e;
                    if (e.key === 'Enter' && value) {
                      onSearch(value);
                    }
                  }}
                />
              </div>
              <div>
                {text && (
                  <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    onClick={() => {
                      this.searchField.value = '';
                      onCloseIconClick();
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              </div>
            </span>
            <GiphyLogo />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  onSearch: PropTypes.func.isRequired,
  text: PropTypes.string,
  onCloseIconClick: PropTypes.func.isRequired
};
AppBarComponent.defaultProps = {
  text: ''
};

export default withStyles(styles)(AppBarComponent);
