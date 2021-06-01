# Color Picker Hooks

![SDG](./docs/button.png)

In this assignment, you'll create an HSL(a) color picker with React, but this time using React Hooks
First, a little bit of color theory...

On the web, and computers in general, we often think of colors using the RGB color model. In HTML and CSS, we often use hexadecimal triplets to describe colors in RGB. For example, #76BCBB represents a nice shade of blue: . 76 is the red component, BC for green, and BB for blue. Those hexadecimal numbers translate, respectively, to 118, 188, 187 in decimal. The range for each color is 0 through 255.

In this model, the three additive primary colors (red, green, and blue) are combined to create colors. The absence of these colors creates black, while all three colors at full strength combine to create white. In hexadecimal, FF represents the decimal value 255. This helps to explain why #FFFFFF represents white. We can also use other notations in CSS to specify colors, such as rgb(118, 188, 187), where the decimal values are given.

RGB isn't the only way we can use numbers to represent colors; there exists many color models, some with specialized purposes, such as CMYK a subtractive model used in printing. In many color models, the relationship between the color components isn't always evident in any meaningful way, especially if you're trying to combine them to find a specific color. Try looking for that perfect shade of blue on an RGB color picker, you will probably find it to be a little counter-intuitive. Some color models are easy to reason about, such as HSL (hue, saturation, lightness) and HSB (hue, saturation, brightness). Like RGB, CSS supports defining colors in HSL:

hsl(50,8%,20%)

The first value hue is given in degrees (around a color wheel), the second value is a percentage of saturation (0% being grey, 100% fully saturated), and the third value, a percentage of lightness (0% black, 100% white).

Objectives

    Respond to user events in React
    Use hooks in react to drive changes to a user interface
    Use props to drive inline styles to dynamically update the appearance of DOM elements
    Understand RGB vs HSL color models
    Use controlled form inputs in React

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

    Add three sliders that update their respective values (hue, saturation, and lightness).

    Display the color on the screen, in both text (i.e. hsl(50, 8%, 20%)) and the actual color as a background color on an element.

    Initialize the hooks to a random color when the page is loaded.

    Add a button that picks a new random color.

Adventure Mode

    Create a ColorSlider component that represents the slider control. What props will you need to send? What function will you need to send to manipulate the correct state?

    Add a fourth slider for alpha, be sure to put some kind of pattern behind your color so the user can see the transparency effect.

    Add a section that displays a CSS class that applies the current background color to an element, just like https://cssgradient.io/

    Only display the output color text in hsla() if the alpha value is less than 1.
