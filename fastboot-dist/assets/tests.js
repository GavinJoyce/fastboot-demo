define('fastboot-demo/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('fastboot-demo/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('fastboot-demo/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('fastboot-demo/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'fastboot-demo/tests/helpers/start-app', 'fastboot-demo/tests/helpers/destroy-app'], function (exports, _qunit, _fastbootDemoTestsHelpersStartApp, _fastbootDemoTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _fastbootDemoTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _fastbootDemoTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('fastboot-demo/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('fastboot-demo/tests/helpers/resolver', ['exports', 'fastboot-demo/resolver', 'fastboot-demo/config/environment'], function (exports, _fastbootDemoResolver, _fastbootDemoConfigEnvironment) {

  var resolver = _fastbootDemoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _fastbootDemoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _fastbootDemoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('fastboot-demo/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('fastboot-demo/tests/helpers/start-app', ['exports', 'ember', 'fastboot-demo/app', 'fastboot-demo/config/environment'], function (exports, _ember, _fastbootDemoApp, _fastbootDemoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _fastbootDemoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _fastbootDemoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('fastboot-demo/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('fastboot-demo/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('fastboot-demo/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('fastboot-demo/tests/routes/github/organisation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/github/organisation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/github/organisation.js should pass jshint.');
  });
});
define('fastboot-demo/tests/routes/github.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/github.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/github.js should pass jshint.');
  });
});
define('fastboot-demo/tests/test-helper', ['exports', 'fastboot-demo/tests/helpers/resolver', 'ember-qunit'], function (exports, _fastbootDemoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_fastbootDemoTestsHelpersResolver['default']);
});
define('fastboot-demo/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('fastboot-demo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map