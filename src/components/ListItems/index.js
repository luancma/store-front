import React from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";

const SideList = () => {
  const history = useHistory();

  const handleClick = (urlParam) => {
    if (!urlParam) return history.push(`/`);

    return history.push(`/${urlParam}`);
  };

  return (
    <List>
      <ListItem button onClick={() => handleClick()}>
        <ListItemIcon>
          <HomeOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Principal" />
      </ListItem>

      <ListItem button onClick={() => handleClick("usuarios")}>
        <ListItemIcon>
          <PeopleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Usuários" />
      </ListItem>

      <ListItem button onClick={() => handleClick()}>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="Produtos" />
      </ListItem>
      <ListItem button onClick={() => handleClick("produtos")}>
        <ListItemIcon>
          <AssessmentOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Estoque" />
      </ListItem>
      <ListItem button onClick={() => handleClick("estoque")}>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Vendas" />
      </ListItem>
    </List>
  );
};

export default SideList;
