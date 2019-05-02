var User        = require('../models/user');
var Category    = require('../models/categories');
var Department  = require('../models/department');
var Product     = require('../models/product');
var Variant     = require('../models/variant');
var mongoose    = require('mongoose');
var colour      = require('colour');


//mongoose.connect('mongodb://localhost/shoppingApp');
mongoose.connect('mongodb://localhost/capacitorbank', { useNewUrlParser: true, useCreateIndex: true, });

function deleteVariants(callback)
{
    Variant.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting variants from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Variants deleted".red)
            callback()
        }
    });
}
function deleteCategories(callback)
{
    Category.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting category from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Categories deleted".red)
            callback()
        }
    });
}
function deleteDepartments(callback)
{
    Department.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting department from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Departments deleted".red)
            callback()
        }
    });
}

function deleteUsers(callback)
{
    User.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting user from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Users deleted".red)
            callback()
        }
    });
}
function deleteProducts(callback)
{
    Product.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting product from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Products deleted".red)
            callback()
        }
    });
}

function insertCategories(callback)
{
    var categories =
    [
        new Category({
            categoryName        : 'Polar'
        }),
        new Category({
            categoryName        : 'Ceramic'
        }),
        new Category({
            categoryName        : 'Solder'
        }),
        new Category({
            categoryName        : 'Solder Irons'
        }),
        new Category({
            categoryName        : 'Lead Free'
        }),
        new Category({
            categoryName         : 'PCB'
        })
    ]

    for (let i = 0; i < categories.length; i++){
        categories[i].save(function(e, r) {
            if (i === categories.length - 1){
                console.log("Categories inserted".green)
                callback();
            }
        });
    }
}

function insertDepartments(callback)
{
    var departments =
    [
        new Department({
            departmentName      : 'Capacitor',
            categories          : 'Polar,Ceramic'

        }),
        new Department({
            departmentName      : 'Tools',
            categories          : 'Solder Irons,PCB,Solder,Lead Free'
        })
    ]

    for (let i = 0; i < departments.length; i++){
        departments[i].save(function(e, r) {
            if (i === departments.length - 1){
                console.log("Departments inserted".green)
                callback();
            }
        });
    }
}

function insertProducts(callback)
{
    var products =
    [
        new Product({
            _id: "5ca24831c5085e5320c3955f",
            imagePath: `/uploads/1554138922493-iron1.jpg`,
            title: 'Solder Iron Station',
            description: 'A soldering Iron with adjustable temperature. Includes a stand to hold iron while not in use, and an on/off switch',
            price: 50.00,
            color: '',
            size: '',
            quantity: 10,
            department: 'Tools',
            category: 'Solder Irons',
        }),
        new Product({
            _id: "5ca24958c5085e5320c39560",
            imagePath: `/uploads/1554139200390-iron3.jpg`,
            title: 'Soldering Iron',
            description: 'A.C. soldering iron, for novice and hobbyists. Includes a stand and 20 g of flux.',
            price: 20,
            color: '',
            size: '',
            quantity: 15,
            department: 'Tools',
            category: 'Solder Irons',
        }),
        new Product({
            _id: "5ca24a74c5085e5320c39562",
            imagePath: `/uploads/1554139604209-iron2.jpg`,
            title: 'Florida Electronics Soldering Iron',
            description: 'A soldering iron from Florida Electronics. Includes the A.C. wall plug soldering iron, which has removable tips, high temperature grip, and heat indicator light. ',
            price: 40,
            color: '',
            size: '',
            quantity: 20,
            department: 'Tools',
            category: 'Solder Irons',
        }),
        new Product({
            _id: "5ca24c35c5085e5320c39564",
            imagePath: `/uploads/1554139881234-pcb1.jpg`,
            title: 'Double Sided Prototyping Boards',
            description: 'Five 6 cm by 8 cm double sided prototype boards. Has corner mounting holes. Each board is 1.6 mm thick and each hole is approximately 0.1 mm.',
            price: 5.00,
            color: 'Green',
            size: '',
            quantity: 100,
            department: 'Tools',
            category: 'PCB',
        }),
        new Product({
            _id: "5ca24ce6c5085e5320c39565",
            imagePath: `/uploads/1554140223997-pcb2.jpg`,
            title: 'Small Double Sided Prototyping Boards',
            description: 'Pack of three 4 cm by 6 cm, prototyping boards. Each board has a thickness of 1.6 mm, and a hole diameter of approximately of 0.1 mm.',
            price: 2.00,
            color: 'Green',
            size: '',
            quantity: 15,
            department: 'Tools',
            category: 'PCB',
        }),
        new Product({
            _id: "5ca24e26c5085e5320c39566",
            imagePath: `/uploads/1554140398150-solder1.jpg`,
            title: 'Small Spool of Solder',
            description: 'Miniatronics 60/40 Tin, Lead, with a Rosin core. 1.0 mm diameter.',
            price: 10,
            color: '',
            size: '',
            quantity: 10,
            department: 'Tools',
            category: 'Solder',
        }),
        new Product({
            _id: "5ca24ec9c5085e5320c39567",
            imagePath: `/uploads/1554140722914-solder2.jpg`,
            title: 'Silverline Solder',
            description: 'Silverline 60/40 Tin, Lead, Rosin core soldering wire. 1.0 mm diameter, 100 g of wire per spool.',
            price: 2.00,
            color: '',
            size: '',
            quantity: 50,
            department: 'Tools',
            category: 'Solder',
        }),
        new Product({
            _id: "5ca24f97c5085e5320c39568",
            imagePath: `/uploads/1554140906489-solder3.jpg`,
            title: '0.8 mm Diameter Soldering Wire',
            description: '0.8 mm Diameter 60/40 Tin, Lead, with a Rosin core, on a 20 m spool.',
            price: 15.00,
            color: '',
            size: '',
            quantity: 10,
            department: 'Tools',
            category: 'Solder',
        }),
        new Product({
            _id: "5ca25016c5085e5320c39569",
            imagePath: `/uploads/1554141109521-solder4Leadf.jpg`,
            title: 'Ultracore Lead Free Soldering Wire',
            description: 'Ultracore 1.0 mm lead free soldering wire, on a spool of 20 m.',
            price: 20.00,
            color: '',
            size: '',
            quantity: 10,
            department: 'Tools',
            category: 'Lead Free',
        }),
        new Product({
            _id: "5ca2531cc5085e5320c3956a",
            imagePath: `/uploads/1554141253649-ceramic1.jpg`,
            title: '0.1 uF Ceramic Capacitor',
            description: 'Ceramic capacitor, with a capacity of 0.1 micro Farad at a 10% tolerance. A non-polarized capacitor for use in small signal circuits. Sold in batches of 10',
            price: 0.4,
            color: '',
            size: '',
            quantity: 500,
            department: 'Capacitor',
            category: 'Ceramic',
        }),
        new Product({
            _id: "5ca24ec9c5085e5320c39567",
            imagePath: `/uploads/1554140722914-solder2.jpg`,
            title: 'Silverline Solder',
            description: '',
            price: 2.00,
            color: '',
            size: '',
            quantity: 50,
            department: 'Tools',
            category: 'Solder',
        }),
        new Product({
            _id: "5ca253ecc5085e5320c3956b",
            imagePath: `/uploads/1554142007298-dielectrics1.jpg`,
            title: 'Polarized Capacitor',
            description: 'A Can type polarized capacitor, capacity of 10 nano Farad. Sold in batches of 10.',
            price: 0.5,
            color: '',
            size: '',
            quantity: 500,
            department: 'Capacitor',
            category: 'Polar',
        }),
        new Product({
            _id: "5ca254c4c5085e5320c3956c",
            imagePath: `/uploads/1554142288808-polar1.jpg`,
            title: '47 nF Polar Capacitor',
            description: 'A 47 nano Farad polarized capacitor. This capacitor can tolerate a voltage swing of 16 V. Sold in batches of 10.',
            price: 0.75,
            color: '',
            size: '',
            quantity: 200,
            department: 'Capacitor',
            category: 'Polar',
        }),
        new Product({
            _id: "5ca2552cc5085e5320c3956d",
            imagePath: `/uploads/1554142418398-polar2.jpg`,
            title: '1 uF Polar Capacitor',
            description: 'A 1 micro Farad Polar Capacitor, with a 50 V input maximum tolerance. Sold in batches of 10.',
            price: 0.6,
            color: '',
            size: '',
            quantity: 200,
            department: 'Capacitor',
            category: 'Polar',
        })
    ];

    for (let i = 0; i < products.length; i++){
        products[i].save(function(e, r) {
            if (i === products.length - 1){
                console.log("Products inserted".green)
                callback();
            }
        });
    }
}

function insertVariants(callback)
{
    var variants =
    [
        new Variant({
            productID: '5ca24958c5085e5320c39560',
            imagePath: `/uploads/1554139777934-iron3b.jpg`,
            color: 'yellow',
            size: '',
            quantity: 10,
        })
    ];

    for (let i = 0; i < variants.length; i++){
        variants[i].save(function(e, r) {
            if (i === variants.length - 1){
                console.log("Variants inserted".green)
                callback();
            }
        });
    }
}

function insertAdmin(callback)
{
    var newUser = new User({
        username    : 'admin@admin.com',
        password    : 'admin',
        fullname    : 'Cuneyt Celebican',
        admin       : true
    });
    User.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log("Admin user inserted".green)
        console.log("Username: ", user.username + "\n" , "Password: admin");
        callback()
    });
}


function deleteDBEntitites(callback)
{
    deleteVariants(function()
    {
        deleteCategories(function()
        {
            deleteDepartments(function()
            {
                deleteUsers(function()
                {
                    deleteProducts(function()
                    {
                        insertCategories(function()
                        {
                            insertDepartments(function()
                            {
                                insertProducts(function()
                                {
                                    insertVariants(function()
                                    {
                                        insertAdmin(callback)
                                    })
                                })
                            })
                        })
                    });
                })
            })
        })
    })
}



deleteDBEntitites(exit)


function exit() {
    mongoose.disconnect();
}
