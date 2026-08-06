🚀 Backend Feature Thinking Framework (BFTF)

Whenever someone says:

"Build this feature."

Don't write code.

Ask these questions one by one.

STEP 1 — Business Problem

Question:

Why does this feature exist?

Example:

Customer needs to book a mechanic.

STEP 2 — Actor

Question:

Who is using this feature?

Examples:

Customer
Mechanic
Garage Owner
Admin
STEP 3 — Goal

Question:

What does the actor want to achieve?

Example:

Book a vehicle service.

STEP 4 — Data

Question:

What information is needed?

Don't think about the database.

Think about the form.

Example:

Vehicle
Problem
Date
STEP 5 — Existing Data

Question:

Does the backend already know any of this information?

Example:

Customer is logged in.

So we already know:

Customer ID
Name
Email

No need to ask again.

STEP 6 — Authentication

Question:

Does the user need to be logged in?

If yes,

Authenticate first.

STEP 7 — Validation

Question:

What should I check before saving?

Examples:

Required fields
Valid values
Duplicate data
Business rules
STEP 8 — CRUD

Question:

Which database operation is this?

Create
Read
Update
Delete
STEP 9 — Database Design

Question:

Which collection should store this data?

Examples:

Users
Vehicles
Bookings
Services
STEP 10 — Relationships

Question:

Does this data belong to another collection?

Example:

Booking belongs to Customer.

Store:

customerId

not customer name.

STEP 11 — Success Response

Question:

What should the frontend receive if everything works?

Examples:

Success message
Created data
ID
Status
STEP 12 — Failure Response

Question:

What errors can happen?

Examples:

Unauthorized
Validation failed
User not found
Duplicate email
Vehicle not found