import React from 'react';
import GoogleAuth from '../components/GoogleAuth';
import { GoogleLogout } from 'react-google-login';
import { Container } from 'react-bootstrap';
import Lottie from 'react-lottie';
import computerData from '../images/sitting_at_computer.json';
import '../style.css';

export default function Homepage(props) {
	let isAuthenticated = localStorage.getItem('isAuthenticated') || false;
	const computerLottieData = {
		loop: true,
		autoplay: true,
		animationData: computerData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	const logout = () => {
		localStorage.removeItem('isAuthenticated');
		localStorage.removeItem('email');
		localStorage.removeItem('familyName');
		localStorage.removeItem('givenName');
		localStorage.removeItem('googleId');
		localStorage.removeItem('imageUrl');
		localStorage.removeItem('name');
		localStorage.removeItem('token');
		localStorage.removeItem('isRegistered');
		isAuthenticated = false;
		window.location.replace('/');
	};
	return (
		<div>
			<div className="backgroundWrapper">
				<Container>
					<Container className="row top-section">
						<div className="row vh-75 mb-5 top-section-2">
							<div className="order-md-1 order-2 col-md-6 col-12 d-flex justify-content-center align-items-center">
								<Lottie options={computerLottieData} height={400} width={400} />
							</div>
							<div className="main-content col-md-6 col-12 order-md-2 order-1 d-flex justify-content-center">
								<h1
									className="text-center black"
									style={{ fontFamily: 'circular' }}
								>
									Annual Summit
								</h1>
								<h5
									className="text-center black"
									style={{ fontFamily: 'circular' }}
								>
									Another night, another dream but always you It's like a vision
									of love that seems to be true Another night another dream but
									always you In the night I dream of love so true Just another
									night, another vision of love You feel joy, you feel pain,
									'cuz nothing will be the same Just another night is all that
									it takes To understand the difference between lovers and fakes
								</h5>
								{isAuthenticated ? (
									<GoogleLogout
										clientId="899787207644-st7cehta2q31e1sp8804vg0q8ro5t94s.apps.googleusercontent.com"
										buttonText="Signout of google"
										onLogoutSuccess={logout}
									></GoogleLogout>
								) : (
									<GoogleAuth />
								)}

								{/* <GoogleAuth showLogin loginText={'Click Here to Get Access'} /> */}
							</div>
						</div>
					</Container>
				</Container>
			</div>

			<div className="bubble-background-about">
				<div className="container py-5 d-flex justify-content-center align-items-center flex-column">
					<h4 className="col-lg-10 col-12 black text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
						vulputate dignissim suspendisse in est ante in. Nec sagittis aliquam
						malesuada bibendum arcu vitae elementum curabitur. Consectetur purus
						ut faucibus pulvinar elementum integer enim neque. Nunc sed id
						semper risus in hendrerit gravida rutrum. Ac odio tempor orci
						dapibus ultrices in iaculis nunc. Quis commodo odio aenean sed
						adipiscing diam donec. Sapien eget mi proin sed. Arcu vitae
						elementum curabitur vitae nunc sed. Orci sagittis eu volutpat odio
						facilisis mauris sit amet massa. Eget duis at tellus at urna. Mus
						mauris vitae ultricies leo integer malesuada nunc vel risus. Sed
						odio morbi quis commodo odio aenean sed adipiscing.
						<br />
						<br />
						Sed adipiscing diam donec adipiscing tristique risus nec feugiat in.
						Donec pretium vulputate sapien nec sagittis aliquam malesuada
						bibendum arcu. Aenean et tortor at risus viverra adipiscing at.
						Ornare arcu dui vivamus arcu felis bibendum ut tristique. Lectus
						magna fringilla urna porttitor rhoncus dolor. Erat imperdiet sed
						euismod nisi porta lorem mollis aliquam. Cras adipiscing enim eu
						turpis egestas pretium. Scelerisque viverra mauris in aliquam. Id eu
						nisl nunc mi ipsum faucibus vitae aliquet nec. Purus gravida quis
						blandit turpis cursus. Risus feugiat in ante metus dictum at.
						Maecenas pharetra convallis posuere morbi. Quis eleifend quam
						adipiscing vitae proin. Turpis egestas maecenas pharetra convallis
						posuere morbi leo urna molestie. Volutpat maecenas volutpat blandit
						aliquam etiam erat. Arcu cursus vitae congue mauris rhoncus aenean.
						Etiam erat velit scelerisque in dictum non. Scelerisque felis
						imperdiet proin fermentum leo vel orci porta non.
					</h4>
				</div>
			</div>
		</div>
	);
}
