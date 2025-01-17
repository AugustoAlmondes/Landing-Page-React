export default function ScrollTo(id)
{
    console.log(id);
    
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}