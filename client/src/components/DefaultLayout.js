import React from "react";
import { Layout, Menu, Tooltip } from "antd";
import Media from "react-media";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PlusCircleOutlined,
  HddOutlined,
  LogoutOutlined,
  ContainerOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logout = () => {
    localStorage.removeItem("user");
  };

  render() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            position: "sticky",
            overflow: "auto",
            top: 0,
            width: "200px",
          }}
        >
          <div className="logo">
            {this.state.collapsed === false ? (
              <h1>
                <Link to="/" style={{ color: "white" }}>
                  JobHunt
                </Link>
              </h1>
            ) : (
              <h1 style={{ fontSize: "30px" }}>
                <Link to="/" style={{ color: "white" }}>
                  Job
                  <br />
                  Hunt
                </Link>
              </h1>
            )}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="/appliedjobs" icon={<ContainerOutlined />}>
              <Link to="/appliedjobs">Applied Jobs</Link>
            </Menu.Item>
            <Menu.Item key="/postjob" icon={<PlusCircleOutlined />}>
              <Link to="/postjob">Post job</Link>
            </Menu.Item>
            <Menu.Item key="/posted" icon={<HddOutlined />}>
              <Link to="/posted">Posted jobs</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Link to="/login" onClick={this.logout}>
                Log Out
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              position: "sticky",
              overflow: "auto",
              top: "0",
              padding: "0",
              zIndex: 9999,
            }}
            className="site-layout-background"
          >
            <div className="flex justify-content-between">
              {/* for toggle */}
              <Media query="(min-width: 600px)">
                {(matches) => {
                  return matches ? (
                    <div>
                      <Tooltip
                        placement="bottomLeft"
                        title={this.state.collapsed ? "Expand" : "Collapse"}
                      >
                        {React.createElement(
                          this.state.collapsed
                            ? MenuUnfoldOutlined
                            : MenuFoldOutlined,
                          {
                            className: "trigger",
                            onClick: this.toggle,
                          }
                        )}
                      </Tooltip>
                    </div>
                  ) : (
                    <></>
                  );
                }}
              </Media>

              {/* for filters */}
              <div>
                <Filter />
              </div>

              {/* for username Display */}

              <Media query="(min-width: 700px)">
                {(matches) => {
                  return matches ? (
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        overflow: "hidden",
                      }}
                    >
                      <UserOutlined />
                      <span className="ml-2">{user.userName}</span>
                    </div>
                  ) : (
                    <></>
                  );
                }}
              </Media>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
