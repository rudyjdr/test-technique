import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const App = () => {
  const classes = useStyles();
  const [result, setResult] = useState([]);

  const handleChange = event => {
    const uri = encodeURI(`http://localhost:9000/${event.target.value}`)
    fetch(uri)
      .then(async res => {
        const result = await res.json();
        setResult(result);
      })
      .catch(e => console.warn("Error: ", e));
  };

  return (
    <div>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Field</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            <MenuItem value="class of worker">class of worker</MenuItem>
            <MenuItem value="industry code">industry code</MenuItem>
            <MenuItem value="occupation code">occupation code</MenuItem>
            <MenuItem value="education">education</MenuItem>
            <MenuItem value="wage per hour">wage per hour</MenuItem>
            <MenuItem value="last education">last education</MenuItem>
            <MenuItem value="marital status">marital status</MenuItem>
            <MenuItem value="major industry code">major industry code</MenuItem>
            <MenuItem value="major occupation code">major occupation code</MenuItem>
            <MenuItem value="mace">mace</MenuItem>
            <MenuItem value="hispanice">hispanice</MenuItem>
            <MenuItem value="sex">sex</MenuItem>
            <MenuItem value="member of labor">member of labor</MenuItem>
            <MenuItem value="reason for unemployment">reason for unemployment</MenuItem>
            <MenuItem value="fulltime">fulltime</MenuItem>
            <MenuItem value="capital gain">capital gain</MenuItem>
            <MenuItem value="capital loss">capital loss</MenuItem>
            <MenuItem value="dividends">dividends</MenuItem>
            <MenuItem value="income tax liability">income tax liability</MenuItem>
            <MenuItem value="previous residence region">previous residence region</MenuItem>
            <MenuItem value="previous residence state">previous residence state</MenuItem>
            <MenuItem value="household-with-family">household-with-family</MenuItem>
            <MenuItem value="household-simple">household-simple</MenuItem>
            <MenuItem value="weight">weight</MenuItem>
            <MenuItem value="msa-change">msa-change</MenuItem>
            <MenuItem value="reg-change">reg-change</MenuItem>
            <MenuItem value="within-reg-change">within-reg-change</MenuItem>
            <MenuItem value="member of labor">member of labor</MenuItem>
            <MenuItem value="lived-here">lived-here</MenuItem>
            <MenuItem value="migration prev res in sunbelt">migration prev res in sunbelt</MenuItem>
            <MenuItem value="num persons worked for employer">num persons worked for employer</MenuItem>
            <MenuItem value="family members under 118">family members under 118</MenuItem>
            <MenuItem value="father birth country">father birth country</MenuItem>
            <MenuItem value="mother birth country">mother birth country</MenuItem>
            <MenuItem value="birth country">birth country</MenuItem>
            <MenuItem value="citizenship">citizenship</MenuItem>
            <MenuItem value="fill questionnaire for veteran's admin">fill questionnaire for veteran's admin</MenuItem>
            <MenuItem value="veterans benefits">veterans benefits</MenuItem>
            <MenuItem value="weeks worked in year">weeks worked in year</MenuItem>
            <MenuItem value="year">year</MenuItem>
            <MenuItem value="salary range">salary range</MenuItem>
          </Select>
        </FormControl>
      </div>

      {result.map(row => (
        <div className="header">
          <span>value: {row.value} | </span>
          <span>number: {row.number} | </span>
          <span>average age: {row.avgAge}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
