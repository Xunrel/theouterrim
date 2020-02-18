import { graphql } from "gatsby"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default ({ data }) => {
  const creature = data.creaturesYaml

  const classes = useStyles()

  return (
    <Dashboard>
      <SEO title={creature.name} />
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.pos} variant="h5" component="h2">
            {creature.name}
          </Typography>
        </CardContent>
      </Card>
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    creaturesYaml(generatedId: { eq: $generatedId }) {
      name
      level
      skills
      talents
      abilities
      equipment
      index
    }
  }
`
