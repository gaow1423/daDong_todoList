import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CheckboxList from "../CheckItem";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(10)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  },
  divContent: {
    marginLeft: theme.spacing(9),
    marginTop: theme.spacing(8)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardContent: {
    flexGrow: 1
  }
}));

const People_Assign = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.divContent}>
        {/* <Button className={classes.button} size="large" variant="text">
           请选择公司人员:
        </Button> */}
        <Typography variant="h5" align="left" color="textPrimary" paragraph>
          请选择公司人员:
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">姓名</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            <MenuItem value={10}>高建东</MenuItem>
            <MenuItem value={20}>王忠英</MenuItem>
            <MenuItem value={30}>王晓军</MenuItem>
            <MenuItem value={40}>俞玉</MenuItem>
          </Select>
        </FormControl>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map(card => ( */}
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    待完成事项
                  </Typography>
                  {/* <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button variant="contained" color="primary">
                          已完成勾选项目
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary">
                          创建新事项
                        </Button>
                      </Grid>
                    </Grid>
                  </div> */}
                  <CheckboxList lists={[0, 1, 2, 3, 4, 5]} />
                  {/* <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    已完成事项
                  </Typography>
                  {/* <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button variant="contained" color="primary">
                          已完成勾选任务
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary">
                          创建新备忘任务
                        </Button>
                      </Grid>
                    </Grid>
                  </div> */}
                  <CheckboxList lists={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />
                  {/* <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>
            {/* ))} */}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default People_Assign;
