<?php

return array(
    '*' => array(
        'omitScriptNameInUrls' => true,
        'maxUploadFileSize' => 335544322,
    ),

    'dev' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/app/',
            'frontEndAssets' => '/src/',
            'siteName' => 'jan',
        )
    ),
    '10.0.1.136' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'My Personal Valet',
        )
    ),

    'yulu-zhang-macbook-pro.local' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'My Personal Valet',
        )
    ),

    'jan.70kft.com' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'siteUrl'        => '/',
            'fileSystemPath' => '/var/www/vhosts/stratospherecreative.com/subdomains/janalet-com/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'jan',
        )
    ),
    // Treat *.vagrantshare.com the same as localhost
    'vagrantshare' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'My Personal Valet',
        )
    ),


);
