export const handleFirebaseAuthError = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/wrong-password':
      return 'Wrong password';

    case 'auth/user-not-found':
      return "We couldn't find an account connected to this email.";
    case 'auth/email-already-in-use':
      return 'The email address is already in use by another account.';
    default:
      return 'We were unable to log you in, please try again ';
  }
};
