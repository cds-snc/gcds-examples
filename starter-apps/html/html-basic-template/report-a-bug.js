/* TODO: This script handles both en/report-a-bug/index.html and
  fr/signaler-un-bug/index.html. They share the same field ids, so one
  script handles both languages. If you rename a field, update it here too. */
(function () {
  var form = document.querySelector('form[name="bugReportForm"]');
  if (!form) return;

  var confirmation = document.getElementById("confirmation");

  var FIELD_IDS = [
    "version",
    "title",
    "currentBehavior",
    "expectedBehavior",
    "systemInfo",
    "stepsToReproduce",
    "codeReproductionUrl",
    "additionalInfo",
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) return;
    showConfirmation();
  });

  function fieldValue(id) {
    var el = document.getElementById(id);
    return el ? el.value : "";
  }

  function showConfirmation() {
    FIELD_IDS.forEach(function (id) {
      var target = document.querySelector('[data-confirm="' + id + '"]');
      if (target) target.textContent = fieldValue(id);
    });

    var githubLink = document.getElementById("github-issue-link");
    if (githubLink) githubLink.setAttribute("href", buildGithubIssueUrl());

    form.hidden = true;
    if (confirmation) confirmation.hidden = false;
  }

  /* TODO: Update the repo/template if you're pointing this at your own
    project's issue tracker instead of gcds-components. */
  function buildGithubIssueUrl() {
    var params = {
      title: fieldValue("title"),
      package_version: fieldValue("version"),
      current_behavior: fieldValue("currentBehavior"),
      expected_behavior: fieldValue("expectedBehavior"),
      sys_info: fieldValue("systemInfo"),
      steps_to_reproduce: fieldValue("stepsToReproduce"),
      code_url: fieldValue("codeReproductionUrl"),
      more_info: fieldValue("additionalInfo"),
    };

    var query = Object.keys(params)
      .map(function (key) {
        return key + "=" + encodeURIComponent(params[key]);
      })
      .join("&");

    return (
      "https://github.com/cds-snc/gcds-components/issues/new?template=bug_report.yml&" +
      query
    );
  }
})();
