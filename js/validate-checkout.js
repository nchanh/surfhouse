$('#login').validate({
    rules: {
        emailAddress: "required",
        password: {
            required: true,
            minlength: 5
        }
    },
    messages: {
        emailAddress: "Please enter your email address",
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        }
    },

    submitHandler: function(form) {
        form.submit();
    }
});

$.validator.addMethod("valueNotEquals", function(value, element, arg) {
    return arg !== value;
}, "Value must not equal arg.");

$('#order').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        fname: "required",
        sname: "required",
        address1: "required",
        postalCode: {
            required: true,
            number: true
        },
        city: "required",
        phone: "required",
        phone: {
            required: true,
            number: true
        },
        creditCard: {
            required: true,
            number: true
        },
        secureCode: {
            required: true,
            number: true
        },
        nameCard: "required",
        country: {
            valueNotEquals: "default"
        },
        provice: {
            valueNotEquals: "default"
        }
    },
    messages: {
        email: {
            required: "Please enter your email",
            email: "Please enter a valid email"
        },
        fname: "Please enter your first name",
        sname: "Please enter your email surname",
        address1: "Please enter your address",
        postalCode: {
            required: "Please enter your postal code",
            number: "Please enter a valid number"
        },
        city: "Please enter your town/city",
        phone: {
            required: "Please enter your phone",
            number: "Please enter a valid number"
        },
        secureCode: {
            required: "Please enter your secure code",
            number: "Please enter a number"
        },
        creditCard: {
            required: "Please enter your credit card",
            number: "Please enter a valid number"
        },
        nameCard: "Please enter your name on card",
        coutry: {
            valueNotEquals: "Please select an item!"
        },
        provice: {
            valueNotEquals: "Please select an item!"
        }
    },

    submitHandler: function(form) {
        form.submit();
    }
});