# Organisms

## Demo

https://beyond-organisms.herokuapp.com/

### My approach to solving a problem like this was...

It's tempting to dive into code straight away for a fun challenge like this. But from my work with design and systems thinking, This is exactly what I haven't done in creating a solution.

I initially started out thinking that the organisms ought to be self-aware of their surrounding cells and could be bestowed with a ruleset to know what to do. But as I sketched things out, I realised that in combination with a grid of containers for the cells that needs to wrap, that would be problematic. After a few sketches, on paper, on a wall, and some walks in nature, I realised there's an algorithm that gives me a list of all the neighbours around each cell, for an entire grid. So that's the core of this app and is generated first. I wrote a test to check that this model array is producing the right values.

One of the workbook sketches of the grid and considering that it could be different widths and heights can be seen here:

https://www.dropbox.com/s/oprnbp0bis34714/organisms-workbook.pdf?dl=0

## Expansion

### Ideas...

- Allow to change Rows and Cols Dynamically.
- Build in Auto-Cycle.
- Allow to drag over cells to bring them to life rather than clicking each one individually.
- Build in a screen test for a set viewport size with a pre-determined selection that checks that the following screen is the expected evolution. This would prove the logic.
- Build in randomization / seeding in the model generator that sets some cells to be alive from the start.
- Move logic controls out of the Organism grid component into a more central controller and use a Context to link that with the Model
- Expand from using TailwindCSS (which I did for rapid prototype dev as I am busy with other work) to use a pure CSS Grid which has unlimited row and column support.

### Instructions

As per the normal create-react-app commands, to run... `npm serve`, `npm build`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### To test...

There are two test suites:

- OrganismModel - Check that for grid rows 10 and cols 12 produces cells with the right values for their neighbour cells. In this particular test it is important to test a central cell, and cells in corners and on sides to make sure wrapping points to the right neighbour cells.
- GridComponent - Check that the created `<OrganismGrid>` grid wrapper has classes which match the number of grid rows and cols in the model, because cells will exist that do not have a matching counterpart in the model.

`npm test` Launches the test runner in the interactive watch mode.
