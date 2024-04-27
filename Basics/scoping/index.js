function display_scopes() {
  // declare variable in local scope
  let message = "local";

  if (true) {

      // declare block-level variable
      let message = "block-level";

      console.log(`inner scope: ${message}`);
  }

  console.log(`outer scope: ${message}`);
}

display_scopes();