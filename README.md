# Color Picker Hooks

![SDG](./docs/button.png)

Requirements

Use range type input elements to drive a color display. You'll end up with something like this:

HINT: You will want to combine techniques of string interpolation and using inline styles in React, for example:

// HINT: Instead of hard coded values here, use your
// this.state attributes to dynamically create this color

<!-- const newBackgroundColor = `hsl(50,8%,20%)`
const newStyle = { backgroundColor: newBackgroundColor  } -->

Then you can dynamically set the backgroundColor of an element in your component using inline styles

<!-- <div style={newStyle}></div> -->

Explorer Mode

    Represent the three values, hue, saturation, and lightness with hooks.

  <!-- DONE -->

    Add three sliders that update their respective values (hue, saturation, and lightness).

  <!-- DONE -->

    Display the color on the screen, in both text (i.e. hsl(50, 8%, 20%)) and the actual color as a background color on an element.

  <!-- DONE -->

    Initialize the hooks to a random color when the page is loaded.

  <!-- DONE -->

    Add a button that picks a new random color.

  <!-- DONE -->

Adventure Mode

    Create a ColorSlider component that represents the slider control. What props will you need to send? What function will you need to send to manipulate the correct state?

  <!-- DONE -->

    Add a fourth slider for alpha, be sure to put some kind of pattern behind your color so the user can see the transparency effect.

  <!-- DONE -->

------------ Add a section that displays a CSS class that applies the current background color to an element, just like https://cssgradient.io/

------------ Only display the output color text in hsla() if the alpha value is less than 1.
