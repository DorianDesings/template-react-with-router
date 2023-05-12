import { NavLink } from 'react-router-dom';
import { StyledMenu } from './styles';

const Menu = () => {
	return (
		<nav>
			<StyledMenu>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About</NavLink>
				</li>
				<li>
					<NavLink to='/contact'>Contact</NavLink>
				</li>
			</StyledMenu>
		</nav>
	);
};

export default Menu;
