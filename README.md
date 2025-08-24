# Toastmate JS

A lightweight, vanilla JS lib that allows simple, easily customizable toast messages.

## Features

- Show, hide, or cycle (auto on, auto off) toast messages
- Specify duration
- Specify custom messages
- Includes a CSS file for easy customization
- Supply custom console warns or errors for your own error handling

## How To

```html
<script>
    // Create the toast message.
    // Currently there are two options available:
        // - Message
        // - Duration - in milliseconds
    var toast = new Toast({
        message: "Hello World!",
        duration: 2000
    });

    // To cycle a message, use the cycle function.
    toast.cycle({
        "Hello World",
        2000
    });

    // To keep a message on screen, use show
    toast.show("Hello World")

    // To remove a message, use hide
    toast.hide();

    // Toastmate will throw an error if the toast container cannot be found,
    // but you can also throw errors and warns manually:

    // To manually show a warning, use doWarn
    toast.doWarn("Your warning here")

    // To manually show an error, use doError
    toast.doError("Your error here")
</script>
