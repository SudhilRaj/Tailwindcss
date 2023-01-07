# Tailwindcss

* Frameworks like Bootstrap, Material UI are based on premaid/predefined high level components like navbar, alerts, cards, etc which have set of predifined properties (Eg: Predefined margins, padding, etc).
* Tailwind is a Utility-first, utility-based low level CSS framework (Very low level CSS classes for every CSS properties). .
* A giant CSS design system with individual CSS classes for everything - For more flexibile, customizable, and unique designs/components.
* Huge set of different tiny utility classes which are entirely configurable - We can change/modify every default values in the design system. (Using the taiwind config file - npx tailwindcss init)
* Following mobile first approach in utilities.
* In production tailwind automatically eliminate any unused utility classes from the final bundle - Min size faster load.
* Drawback - Lot hard to read duplicate classnames - This can avoided upto an extend if use Tailwind with frameworks such as React or Angular. Where we can create re-usable components.
* Also we can use @apply directive of the tailwind to avoid class duplications.
Eg: 
.btn-blue {
	@apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700;
}
* For a CSS beginner Tailwind is not good option.


For more information refer the official doc:
https://tailwindcss.com/
