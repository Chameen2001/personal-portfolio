import { Grid } from '@mui/material'
import React from 'react'
import ProjectsCard from '../../components/common/projectCard/ProjectsCard'
import { H2, H4, MainGrid, MainTitleGrid, ProjectCard, ProjectRow, Section } from './Project.style'

export default function Project() {
    return (
        <Section>
            <MainGrid container>
                <MainTitleGrid item xl={12} xs={12}>
                    <Grid data-aos="zoom-out" container direction="column" alignItems="center">
                        <Grid item> <H4>creative</H4> </Grid>
                        <Grid item> <H2>my project</H2> </Grid>
                    </Grid>
                </MainTitleGrid>
                <Grid item xl={12} xs={12}>
                    <Grid container justifyContent="center" alignItems="space-between">
                        <ProjectRow item xl={8} xs={8}>
                            <Grid container display="row" justifyContent="space-around" alignItems="center">
                                <ProjectCard>
                                    <ProjectsCard title="Car rental system" description="Car rental system using spring" image="carRental.png" />
                                </ProjectCard>
                                <ProjectCard>
                                    <ProjectsCard title="Car rental system" description="Car rental system using spring" image="posSystem.png" />
                                </ProjectCard>
                                <ProjectCard />
                            </Grid>
                        </ProjectRow>
                        <ProjectRow item xl={8} xs={8}>
                            <Grid container display="row" justifyContent="space-around" alignItems="center">
                                <ProjectCard />
                                <ProjectCard />
                                <ProjectCard />
                            </Grid>
                        </ProjectRow>
                    </Grid>
                </Grid>
            </MainGrid>
        </Section>
    )
}
